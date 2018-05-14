import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DocumentChangeType, DocumentChange, QueryDocumentSnapshot } from '@firebase/firestore-types';
import { Subscription } from 'rxjs/Subscription';
import { take, first } from 'rxjs/operators';
import * as moment from 'moment';
import * as _ from "lodash";

import { User } from '../../shared/interfaces/interface';
import { MessageModel, UserModel, OnlineUsers, Metadata,  Participants, Room } from '../../shared/models/model';
import { AuthService } from './auth.service';

// interface DocumentChangeAction { type: DocumentChangeType; payload: DocumentChange; }

@Injectable()
export class FirestoreService {

  usersRef: AngularFirestoreCollection<any>;
  roomsRef: AngularFirestoreCollection<any>;
  messagesRef: AngularFirestoreCollection<any>;
  participantsRef: AngularFirestoreCollection<any>;
  onlineUsersRef: AngularFirestoreCollection<any>;

  onlineSubscription: Subscription;

  constructor(private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.usersRef = firestore.collection('users');
    this.roomsRef = firestore.collection('rooms');
    this.messagesRef = firestore.collection('messages');
    this.participantsRef = firestore.collection('participants');
    this.onlineUsersRef = firestore.collection('online');
  }

  // ADD NEW USER
  createNewUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {

        this.auth.enableNetwork();

        const uid = <string>response.uid;
        const avatar = { url: 'https://getl.io/eJjUt' };
        const timestamp = moment().format('X');
        const newUser = new UserModel(uid, user.email, user.password, user.display, timestamp, avatar);

        const metadata = new Metadata('online', timestamp);
        const online = new OnlineUsers(uid, user.display, timestamp);

        this.setUserStatus(true, false);

        this.usersRef.add({ ...newUser  })
          .then(() => (this.router.navigate(['dashboard'], { relativeTo: this.route })));

        this.onlineUsersRef.add({ ...online, metadata: { ...metadata } });

      });
  }

  signInAnonymously() {
    return this.auth.signInAnonymously()
      .then((response: any) => {

        this.auth.enableNetwork();

        const uid = <string>response.uid;
        const avatar = { url: 'http://www.pngmart.com/files/5/Anonymous-PNG-Pic.png' };
        const timestamp = moment().format('X');
        const anonymousUser = new UserModel(uid, 'anonymous@z.com', '123123', 'Anonymous User', timestamp, avatar);

        const online = new OnlineUsers(uid, 'Anonymous User', timestamp);

        this.setUserStatus(true, true);

        this.usersRef.add({ ...anonymousUser  })
          .then(() => (this.router.navigate(['dashboard'], { relativeTo: this.route })));

        this.onlineUsersRef.add({ ...online, metadata: { status: 'online', timestamp } });

      });
  }

  // ADD NEW ROOM
  createNewRoom(room: Room) {

    const user = this.usersRef.snapshotChanges().map((action: any[]) => {
      return action.map((change: any) => {

        const document = <any>change.payload.doc;
        const current = this.auth.uid;
        const uid = document.get('uid');
        return uid === current ? document.data() : null;

      }).filter(e => e !== null)[0];
    }).subscribe((host) => {

      delete host.password;
      this.roomsRef.add({ ...room, host, timestamp: moment().format('X') });
      user.unsubscribe();

    });

  }

  setUserStatus(option: boolean = undefined, isAnonymous: boolean = undefined) {

    if (this.auth.auth.auth.currentUser.isAnonymous === true && isAnonymous !== true) {
      this.auth.auth.auth.currentUser.delete();
      this.auth.signOut()
        .then(() => {
          this.auth.disableNetwork();
          this.onlineSubscription.unsubscribe();
          this.router.navigate(['/']);
        })
    }

    const toOnline = this.onlineUsersRef.snapshotChanges().pipe( ).map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;
        const uid = this.auth.uid;

        if (document.get('uid') === uid) {

          const timestamp = moment().format('X');
          let newData = document.data();

          const forTrue = () => {
            newData['metadata'] = { status: 'online', timestamp };
            document.ref.set(newData, { merge: true });
            toOnline.unsubscribe();
          };

          const forFalse = () => { };

          option ? forTrue() : forFalse();

        }
      });

    }).subscribe(() => {  });

    const toOffline = this.onlineUsersRef.snapshotChanges().pipe( ).map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;
        const uid = this.auth.uid;

        if (document.get('uid') === uid) {

          const timestamp = moment().format('X');
          let newData = document.data();

          const forTrue = () => { };

          const forFalse = () => {

            newData['metadata'] = { status: 'offline', timestamp };
            document.ref.set(newData, { merge: true });
            this.auth.signOut()
              .then(() => {
                this.auth.disableNetwork();
                toOffline.unsubscribe();
                this.router.navigate(['/']);
              });

          };

          option ? forTrue() : forFalse();

        }
      });

    }).subscribe(() => {  });

  }

  // ADD NEW MESSAGE TO ROOM
  newMessage(message: string, room_name: string) {

    const uid = this.auth.uid;
    const timestamp = moment().format('X');
    const isAnonymous = this.auth.auth.auth.currentUser.isAnonymous;

    const newMessage = new MessageModel(uid, message, timestamp);
    delete newMessage.emojis;

    return this.messagesRef.add({ ...newMessage, room_name, isAnonymous });

  }

  // GET MESSAGES BY ROOM NAME
  messages(room_name: string) {
    const users = this.usersRef.valueChanges();

    const messages = this.messagesRef.snapshotChanges().map((action: any[]) => {
      const newAction = action.map((change: any) => {
        const document = <any>change.payload.doc;
        const condition = document.get('room_name') === room_name;
        return condition ? { ...document.data(), key: document.id } : null;
      }).filter(e => e !== null);

      return <any[]>_.sortBy(newAction, [(message) => message.timestamp]);
    });

    return users.switchMap((user) => {
      return messages.map((message) => {
        return message.map((_message) => {
          const _user = user.filter(e => e.uid === _message.uid)[0];
          if (_user !== undefined) {
            return { ..._message, url: _user.avatar.url }
          }
        })
      })
    });
  }

  // ADD NEW PARTICIPANT IN ROOM
  newRoomParticipant(user: User, room: Room) {

    const uid = this.auth.uid;
    const timestamp = moment().format('X');
    const participant = new Participants(uid, user.display, timestamp, room.room_name, user.avatar.url);

    const participantSubscription = this.participantsRef.valueChanges().pipe( take(1) ).subscribe((response: any[]) => {

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

      participantSubscription.unsubscribe();

    });

  }

  // GET PARTICIPANTS OF SELECTED ROOM
  participants(room_name: string) {

    return this.participantsRef.snapshotChanges().map((action: any[]) => {
      let uniq = action.map((change: any) => {
        const document = <any>change.payload.doc;
        return document.get('room_name') === room_name ? document.data() : null;
      }).filter(e => e !== null);

      uniq = _.uniqBy(uniq, 'user_name');
      const sorted = <any[]>_.sortBy(uniq, [(room) => room.timestamp]);

      return sorted.reverse();
    });

  }

  get onlineUsers() {
    const onlineUsers = this.onlineUsersRef.valueChanges();
    const users = this.usersRef.valueChanges();

    return onlineUsers.switchMap((_onlineUsers) => {
      return users.map((_users) => {
        return _onlineUsers.map((element) => {
          const user = _users.filter(e => e.uid === element.uid)[0];
          return user !== undefined ? { ...element, url: user.avatar.url } : 0;
        }).filter(anon => anon.display !== 'Anonymous User');
      })

    });
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

  removeAnonymousData() {

    this.usersRef.snapshotChanges().map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (document.get('display') === 'Anonymous User') {
          document.ref.delete()
        } else {
          return document.data();
        }

      });

    }).subscribe((response) => { });

    this.participantsRef.snapshotChanges().map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (document.get('user_name') === 'Anonymous User') {
          document.ref.delete()
        } else {
          return document.data();
        }

      });

    }).subscribe((response) => { });

    this.onlineUsersRef.snapshotChanges().map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (document.get('display') === 'Anonymous User') {
          document.ref.delete()
        } else {
          return document.data();
        }
      });

    }).subscribe((response) => { });

    this.messagesRef.snapshotChanges().map((action: any[]) => {

      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (document.get('isAnonymous') === true) {
          document.ref.delete()
        } else {
          return document.data();
        }
      });

    }).subscribe((response) => { });

  }

}
