import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeType, DocumentChange, QueryDocumentSnapshot  } from '@firebase/firestore-types';
import * as m from 'moment';
import * as _ from "lodash";

import { User } from '../../shared/interfaces/interface';
import { MessageModel, UserModel, Room } from '../../shared/models/model';
import { AuthService } from './auth.service';

interface DocumentChangeAction { type: DocumentChangeType; payload: DocumentChange; }

@Injectable()
export class FirestoreService {

  usersRef: AngularFirestoreCollection<any>;
  roomsRef: AngularFirestoreCollection<any>;
  messagesRef: AngularFirestoreCollection<any>;
  moment: m.Moment = m();

  constructor(private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.usersRef = firestore.collection('users');
    this.roomsRef = firestore.collection('rooms');
    this.messagesRef = firestore.collection('messages')
  }

  createNewUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {

        const uid = <string>response.uid;
        const newUser = new UserModel(uid, user.email, user.password, user.display);

        this.usersRef.add({ ...newUser });
        this.router.navigate(['dashboard'], { relativeTo: this.route });

      });
  }

  createNewRoom(room: Room) {

    const user = this.usersRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
  	// const user = this.usersRef.snapshotChanges().map((action: any[]) => {
      return action.map((change: DocumentChangeAction) => {
  		// return action.map((change: any) => {

        const document = <QueryDocumentSnapshot>change.payload.doc;
    		// const document = change.payload.doc;
        const current = this.auth.uid;
        const uid = document.get('uid');
        return uid === current ? document.data() : null;

      }).filter(e => e !== null)[0];
    }).subscribe((host) => {

      delete host.password;
      return this.roomsRef.add({ ...room, host, timestamp: this.moment.format('X') });

    });

  }

  newMessage(message: string, room_name: string) {

    const uid = this.auth.uid;
    const timestamp = this.moment.format('X');

    const newMessage = new MessageModel(uid, message, timestamp);
    delete newMessage.emojis;

    this.messagesRef.add({ ...newMessage, room_name });

  }

  messages(room_name: string) {
    return this.messagesRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
      const newAction = action.map((change: DocumentChangeAction) => {
        const document = <QueryDocumentSnapshot>change.payload.doc;
        const condition = document.get('room_name') === room_name;
        return condition ? { ...document.data(), key: document.id } : null;
      }).filter(e => e !== null);

      const sorted = <any[]>_.sortBy(newAction, [(message) => message.timestamp]);
      return sorted;
    });
  }

  participants(room_name: string) {
    const _users = this.usersRef.valueChanges();

    const _messages = this.messagesRef.snapshotChanges().map((action: DocumentChangeAction[]) => {
      return action.map((change: DocumentChangeAction) => {
        const document = <QueryDocumentSnapshot>change.payload.doc;
        const condition = document.get('room_name') === room_name;
        return condition ? { ...document.data(), key: document.id } : null;
      }).filter(e => e !== null);
    });

    return _messages.switchMap((messages) => {
      return _users.map((users) => {
        const participants = messages.map((message: any) => {
          const filtered = users.filter(e => e.uid === message.uid)[0];
          return { ...filtered };
        });
        const uniq = _.uniqBy(participants, 'display');
        return uniq;
      })
    });
  }

  get room() {
    return this.roomsRef.valueChanges().map((rooms: any[]) => {
      return rooms;
    });
  }

  get rooms() {
    return this.roomsRef.valueChanges().map((rooms: any[]) => {
      const sorted = <any[]>_.sortBy(rooms, [(room) => room.timestamp]);
      return sorted.reverse();
    });
  }

}
