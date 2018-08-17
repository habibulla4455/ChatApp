import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  state: any;

  constructor(private afAuth: AngularFireAuth, private fbApp: FirebaseApp, private router: Router) {
    this.state = afAuth.authState;

    afAuth.authState.subscribe((state) => {
      if (state !== null) {
        console.log(state);
        this.router.navigate(['/', 'dashboard']);
      } else {
        console.log('signed out!');
        this.router.navigate(['/']);
      }
    });
  }

  get uid() {
    return this.afAuth.auth.currentUser !== null ? this.afAuth.auth.currentUser.uid : '';
  }

  get authState() {
    return this.afAuth.authState;
  }

  get auth() {
    return this.afAuth;
  }

  enableNetwork() {
    this.fbApp.firestore().enableNetwork();
  }

  disableNetwork() {
    this.fbApp.firestore().disableNetwork();
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
