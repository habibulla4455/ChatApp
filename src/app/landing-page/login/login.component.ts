import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../common/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
      'email': [ 'q@q.com' ],
      'password': [ '123123' ]
    })
  }

  ngOnInit() {
  }

  signInAnonymously() {
    this.auth.signInAnonymously()
      .then((response) => {

      }).catch((e) => {

        this.loginForm.reset();
        alert(e.message);

      });
  }

  onSubmit() {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {

      }).catch((e) => {

        this.loginForm.reset();
        this.loginForm.patchValue({ email });
        alert(e.message);

      });

  }

}
