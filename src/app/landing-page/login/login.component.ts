import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../common/core/services/auth.service';
import { FirestoreService } from '../../common/core/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSigningin: boolean;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private router: Router, private route: ActivatedRoute, private auth: AuthService, private firestore: FirestoreService) {
    // this.loginForm = fb.group({
    //   'email': [ 'q@a.com' ],
    //   'password': [ '123123' ]
    // });
    this.loginForm = fb.group({
      'email': [ '' ],
      'password': [ '' ]
    });
  }

  ngOnInit() {
    this.isSigningin = false;
  }

  onSigninAnonymously() {
    this.isSigningin = true;

    this.firestore.signInAnonymously()
      .catch((e) => {

        alert(e.message)

      });
  }

  onCreateAccount() {

    this.router.navigate(['registration'], { relativeTo: this.route });

  }

  onSubmit() {

    const form = this.loginForm.value;

    if (form.email === null || form.password === null) {
      alert('Input invalid. Please try again.');
      return;
    }

    this.isSigningin = true;

    this.auth.signInWithEmailAndPassword(form.email, form.password)
      .then((user) => {

        this.isSigningin = false;
        this.auth.enableNetwork();
        this.firestore.setUserStatus(true, false);
        this.router.navigate(['dashboard'], { relativeTo: this.route });

      }).catch((e) => {

        this.isSigningin = false;
        this.loginForm.reset();
        this.loginForm.patchValue({ email: form.email });
        alert(e.message);

      });

  }

}
