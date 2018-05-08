import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
// import { DocumentChangeType, DocumentChange, QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore-types';
import { take } from 'rxjs/operators';
import * as firebase from 'firebase';

import { FirestoreService } from './firestore.service';

import { Upload } from '../../shared/models/model';

// interface DocumentChangeAction { type: DocumentChangeType; payload: DocumentChange; }

@Injectable()
export class PreferenceService {

  constructor(private dialog: MatDialog, private auth: AngularFireAuth, private firestore: FirestoreService, private storage: AngularFireStorage) { }

  updateDisplay(form: any) {

    this.auth.auth.currentUser.updateProfile({
      displayName: form.display,
      photoURL: ''
    }).then(() => (this.firestoreChange('display', form.display)));

  }

  updateEmailI(form: any) {
    const email = this.auth.auth.currentUser.email;
    const password = form.password;

    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        user.updateEmail(form.email).then(() => (this.firestoreChange('email', form.email)));
      }).catch((e) => {
        alert(e.message);
        this.dialog.closeAll();
      });

  }

  updatePassword(form: any) {
    const email = this.auth.auth.currentUser.email;
    const password = form.currentPassword;

    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        user.updatePassword(form.password).then(() => (this.firestoreChange('password', form.password)));
      }).catch((e) => {
        alert(e.message);
        this.dialog.closeAll();
      });
  }

  updateAvatar(form: Upload, newUrl: string) {

    newUrl === '' ? this.firestoreFromFile(form) : this.firestoreFromLink(newUrl);

  }

  private firestoreFromFile(upload: Upload) {

    const uploadTask = this.storage.ref(`avatars/${upload.file.name}`).put(upload.file);
    uploadTask.snapshotChanges().map((snapshot) => {

      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);

    }).subscribe(() => { });


    uploadTask.task
      .then((snapshot) => {
        snapshot.ref.getDownloadURL()
          .then((url) => {
            upload.totalBytes = snapshot.totalBytes;
            upload.url = url;
            upload.fileName = snapshot.metadata.name;
            upload.contentType = snapshot.metadata.contentType;
            upload.timeCreated = snapshot.metadata.timeCreated;
            delete upload.file;

            console.log({ avatar: { ...upload } });
            this.firestoreChange('avatar', { avatar: { ...upload } });
          })
      })

  }

  private firestoreFromLink(newUrl: string) {
    this.firestore.usersRef.snapshotChanges().pipe( take(1) ).map((action: any[]) => {
      const uid = this.auth.auth.currentUser.uid;
      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (document.get('uid') === uid) {
          const avatar = { avatar: { url: newUrl } };
          document.ref.set(avatar, { merge: true });
        }

        return document.data();
      })
    }).subscribe(() => {

      alert(`Successfully changed your avatar.`);
      this.dialog.closeAll();

    });
  }

  private firestoreChange(option: string, form: any) {
    this.firestore.usersRef.snapshotChanges().pipe( take(1) ).map((action: any[]) => {
      const uid = this.auth.auth.currentUser.uid;
      return action.map((change: any) => {
        const document = <any>change.payload.doc;

        if (option === 'avatar') {
          document.get('uid') === uid ? document.ref.set(form, { merge: true }) : 0;
        } else {
          document.get('uid') === uid ? document.ref.update(option, form) : 0;
        }

        return document.data();
      })
    }).subscribe(() => {

      switch(option) {
        case 'display':
          alert(`Display name successfully changed to ${form}.`);
          break;
        case 'email':
          alert(`Email address successfully changed to ${form}.`);
          break;
        case 'password':
          alert(`Password successfully changed.`);
          break;
        case 'avatar':
          alert(`Successfully changed your avatar.`);
          break;
        default: break;
      }

      this.dialog.closeAll();

    });
  }

}
