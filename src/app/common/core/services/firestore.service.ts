import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from './auth.service';

import { User } from '../../shared/interfaces/user';
import { UserModel } from '../../shared/models/user.model';

@Injectable()
export class FirestoreService {

  userRef: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore, private auth: AuthService) {
    this.userRef = firestore.collection('users');
  }

  createNewUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {

        const uid = <string>response.uid;
        const newUser = new UserModel(uid, user.email, user.password, user.display);

        this.userRef.add({ ...newUser });

      });
  }

}
