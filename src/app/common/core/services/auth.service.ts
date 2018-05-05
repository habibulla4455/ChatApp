import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe((response) => {
      console.log(response);
    });
  }

  get uid() {
    return this.afAuth.auth.currentUser.uid;
  }

  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInAnonymously(): Promise<any> {
    return this.afAuth.auth.signInAnonymously();
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
