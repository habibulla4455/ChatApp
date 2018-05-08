import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { FirestoreService } from '../../common/core/services/firestore.service';

const EMAILPATTERN: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  signupForm: FormGroup;
  current: string;
  isSigningin: boolean;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private firestoreService: FirestoreService) {
    // this.signupForm = fb.group({
    //   'email': [ 'q@q.com', [ Validators.required, Validators.pattern(EMAILPATTERN), CustomValidator.containsNone ] ],
    //   'password': [ '123123', [ Validators.required, Validators.minLength(6), CustomValidator.containsNone ] ],
    //   'confirm': [ '123123', [ this.confirmCheck.bind(this), CustomValidator.containsNone ] ],
    //   'display': [ 'madara', [ Validators.required, Validators.minLength(6), CustomValidator.containAlpha, CustomValidator.containsNone ] ]
    // })
    this.signupForm = fb.group({
      'email': [ '', [ Validators.required, Validators.pattern(EMAILPATTERN), CustomValidator.containsNone ] ],
      'password': [ '', [ Validators.required, Validators.minLength(6), CustomValidator.containsNone ] ],
      'confirm': [ '', [ this.confirmCheck.bind(this), CustomValidator.containsNone ] ],
      'display': [ '', [ Validators.required, Validators.minLength(6), CustomValidator.containAlpha, CustomValidator.containsNone ] ]
    })
  }

  ngOnInit() {
    this.isSigningin = false;
    this.current = this.signupForm.value.password;

    this.signupForm.valueChanges.subscribe((response) => {
      const password = response.password;
      this.current = password;
    });
  }

  get email(): ValidationErrors {
    return this.signupForm.get('email').errors;
  }

  get password(): ValidationErrors {
    return this.signupForm.get('password').errors;
  }

  get confirm(): ValidationErrors {
    return this.signupForm.get('confirm').errors;
  }

  get display(): ValidationErrors {
    return this.signupForm.get('display').errors;
  }

  confirmCheck(control: AbstractControl): ValidationErrors | null {
    const condition = control.value === this.current;
    return condition ? null : { isNotMatched: true };
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      alert('Input invalid. Please try again.');
      return;
    }

    this.isSigningin = true;

    this.firestoreService.createNewUser(this.signupForm.value)
      .catch((e) => {

        this.isSigningin = false;
        const email = this.signupForm.value.email;
        this.signupForm.reset();
        this.signupForm.patchValue({ email });
        alert(e.message)

      });
  }

}

export class CustomValidator {
  static containAlpha(control: AbstractControl): ValidationErrors | null {
    const CONTAIN_LOWERCASE_REGEXP: RegExp = /[a-z]/;
    return CONTAIN_LOWERCASE_REGEXP.test(control.value) ? null : { containsAlpha: true };
  }
  static containsNone(control: AbstractControl): ValidationErrors | null {
    const condition = String(control.value).length !== 0;
    return condition ? null : { containsNone: true };
  }
}
