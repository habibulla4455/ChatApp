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

  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['dashboard']);
      });
  }

  signInAnonymously(): Promise<any> {
    return this.afAuth.auth.signInAnonymously()
      .then((response) => {
        this.router.navigate(['dashboard']);
      });
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['dashboard']);
      });
  }

}