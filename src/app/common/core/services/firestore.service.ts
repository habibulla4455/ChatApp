import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DocumentChangeType, DocumentChange, QueryDocumentSnapshot  } from '@firebase/firestore-types';
import { take } from 'rxjs/operators';
import * as moment from 'moment';
import * as _ from "lodash";

import { User } from '../../shared/interfaces/interface';
import { MessageModel, UserModel, Participants, Room } from '../../shared/models/model';
import { AuthService } from './auth.service';

interface DocumentChangeAction { type: DocumentChangeType; payload: DocumentChange; }

@Injectable()
export class FirestoreService {

  usersRef: AngularFirestoreCollection<any>;
  roomsRef: AngularFirestoreCollection<any>;
  messagesRef: AngularFirestoreCollection<any>;
  participantsRef: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.usersRef = firestore.collection('users');
    this.roomsRef = firestore.collection('rooms');
    this.messagesRef = firestore.collection('messages')
    this.participantsRef = firestore.collection('participants')
  }

  // ADD NEW USER
  createNewUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {

        const uid = <string>response.uid;
        const newUser = new UserModel(uid, user.email, user.password, user.display);

        this.usersRef.add({ ...newUser, timestamp: moment().format('X') });
        this.router.navigate(['dashboard'], { relativeTo: this.route });

      });
  }

  // ADD NEW ROOM
  createNewRoom(room: Room) {

    const user = this.usersRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
      return action.map((change: DocumentChangeAction) => {

        const document = <QueryDocumentSnapshot>change.payload.doc;
        const current = this.auth.uid;
        const uid = document.get('uid');
        return uid === current ? document.data() : null;

      }).filter(e => e !== null)[0];
    }).subscribe((host) => {

      delete host.password;
      return this.roomsRef.add({ ...room, host, timestamp: moment().format('X') });

    });

  }

  // ADD NEW MESSAGE TO ROOM
  newMessage(message: string, room_name: string) {

    const uid = this.auth.uid;
    const timestamp = moment().format('X');

    const newMessage = new MessageModel(uid, message, timestamp);
    delete newMessage.emojis;

    return this.messagesRef.add({ ...newMessage, room_name });

  }

  // GET MESSAGES BY ROOM NAME
  messages(room_name: string) {
    return this.messagesRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
      const newAction = action.map((change: DocumentChangeAction) => {
        const document = <QueryDocumentSnapshot>change.payload.doc;
        const condition = document.get('room_name') === room_name;
        return condition ? { ...document.data(), key: document.id } : null;
      }).filter(e => e !== null);

      return <any[]>_.sortBy(newAction, [(message) => message.timestamp]);
    });
  }

  // ADD NEW PARTICIPANT IN ROOM
  newRoomParticipant(user: User, room: Room) {

    const timestamp = moment().format('X');
    const participant = new Participants(user.display, timestamp, room.room_name);

    this.participantsRef.valueChanges().pipe( take(1) ).subscribe((response: any[]) => {

      const length = response
        .filter((e) => e.room_name === room.room_name)
        .filter((e) => e.user_name === user.display).length;

      this.checkIfRoomIsFull(user, room);

      length === 0
        ? this.checkIfRoomIsFull(user, room)
          .then((resolve) => {

            if (resolve) {
              this.participantsRef.add({ ...participant })
            } else {
              alert('Room is full');
              this.router.navigate(['/', 'dashboard']);
            }

          })
        : null;

    });

  }

  // GET PARTICIPANTS OF SELECTED ROOM
  participants(room_name: string) {
    return this.participantsRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
      let uniq = action.map((change: DocumentChangeAction) => {
        const document = <QueryDocumentSnapshot>change.payload.doc;
        return document.get('room_name') === room_name ? document.data() : null;
      }).filter(e => e !== null);

      uniq = _.uniqBy(uniq, 'user_name');
      const sorted = <any[]>_.sortBy(uniq, [(room) => room.timestamp]);

      return sorted.reverse();
    })
  }

  // DISPLAY ROOMS IN DASHBOARD
  get rooms() {
    return this.roomsRef.valueChanges().map((rooms: any[]) => {
      let sorted = <any[]>_.sortBy(rooms, [(room) => room.timestamp]);
      sorted =_.remove(sorted, (e) => e.room_name !== 'Public Room');

      return sorted.reverse();
    });
  }

  // GET CURRENT USER
  get currentUser() {
    return this.usersRef.valueChanges().map((user: any) => {
      const uid = this.auth.uid;
      return user.filter(e => e.uid === uid)[0]
    })
  }

  // GET USER BY UID
  profile(uid: string) {
  this.usersRef.valueChanges().subscribe((action) => {
    const user = action.filter(_user => _user.uid === uid)[0];
    alert(`${user.display}`);

  });
}




  // HELPER FUNCTIONS

  private checkIfRoomIsFull(user: User, room: Room) {

    return new Promise(
      (resolve, reject) => {
        this.participantsRef.valueChanges().pipe( take(1) ).subscribe((response: any[]) => {

          const length = response
          .filter((e) => e.room_name === room.room_name).length;

          const length2 = response.filter(e => e.user_name === user.display && e.room_name === room.room_name).length;

          length === room.num_participants && length2 !== 1 ? resolve(false) : resolve(true);

        });
      }
    );

  }

}
