import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../common/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSigningin: boolean;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.loginForm = fb.group({
      'email': [ 'q@q.com' ],
      'password': [ '123123' ]
    })
  }

  ngOnInit() {
    this.isSigningin = false;
  }

  onSigninAnonymously() {
    this.isSigningin = true;

    this.auth.signInAnonymously()
      .then((response) => {

        this.isSigningin = false;
        this.router.navigate(['dashboard'], { relativeTo: this.route });

      }).catch((e) => {

        this.loginForm.reset();
        alert(e.message);

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
      .then((response) => {

        this.isSigningin = false;
        this.router.navigate(['dashboard'], { relativeTo: this.route });

      }).catch((e) => {

        this.isSigningin = false;
        this.loginForm.reset();
        this.loginForm.patchValue({ email: form.email });
        alert(e.message);

      });

  }

}
