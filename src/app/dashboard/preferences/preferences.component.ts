import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog, MatDialogRef, MatExpansionPanel } from '@angular/material';

import { CustomUpload } from '../../common/shared/models/model';

import { UpdateConfirmationDialogComponent } from '../../common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component';
import { CloudQueueDialogComponent } from '../../common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component';

const EMAILPATTERN: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  preferencesForm: FormGroup;
  confirmationRef: MatDialogRef<UpdateConfirmationDialogComponent>;
  cloudRef: MatDialogRef<CloudQueueDialogComponent>;
  @ViewChild('display')  displayPanel: MatExpansionPanel;
  @ViewChild('email')    emailPanel: MatExpansionPanel;
  @ViewChild('password') passwordPanel: MatExpansionPanel;
  @ViewChild('avatar')   avatarPanel: MatExpansionPanel;
  current: string;
  newUrl: string = '';
  showClear: boolean = false;
  targetFiles: FileList;
  upload: File;
  file: CustomUpload;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private dialog: MatDialog) {
    this.preferencesForm = fb.group({
      updateDisplay: fb.group({
        'display': [ 'Uchiha_Madara', [ Validators.required, Validators.minLength(6), CustomValidator.containAlpha ] ]
      }),
      updateEmail: fb.group({
        'email': [ 'q@a.com', [ Validators.required, Validators.pattern(EMAILPATTERN) ] ]
      }),
      updatePassword: fb.group({
        'password': [ '123456', [ Validators.required, Validators.minLength(6) ] ],
        'confirm': [ '123456', [ Validators.required, this.confirmCheck.bind(this) ] ]
      }),
    })
  }

  ngOnInit() {
    // this.displayPanel.open();
    // this.emailPanel.open();
    // this.passwordPanel.open();
    this.avatarPanel.open();

    this.current = this.preferencesForm.value['updatePassword'].password;

    this.preferencesForm.valueChanges.subscribe((response) => {
      const password = response['updatePassword'].password;
      this.current = password;
    });

    // this.displayPanel.opened.subscribe(() => this.preferencesForm.reset());
    // this.emailPanel.opened.subscribe(() => this.preferencesForm.reset());
    // this.passwordPanel.opened.subscribe(() => this.preferencesForm.reset());
    // this.avatarPanel.opened.subscribe(() => this.preferencesForm.reset());
  }

  get displayError(): ValidationErrors {
    return this.preferencesForm.get('updateDisplay').get('display').errors;
  }

  get emailError(): ValidationErrors {
    return this.preferencesForm.get('updateEmail').get('email').errors;
  }

  get passwordError(): ValidationErrors {
    return this.preferencesForm.get('updatePassword').get('password').errors;
  }

  get confirmError(): ValidationErrors {
    return this.preferencesForm.get('updatePassword').get('confirm').errors;
  }

  confirmCheck(control: AbstractControl): ValidationErrors | null {
    const condition = control.value === this.current;
    return condition ? null : { isNotMatched: true };
  }

  onClear() {
    this.showClear = false;
    this.newUrl = '';
    try {
      this.upload['url'] = '';
    } catch(e) { }
  }

  onChange(event: Event) {

    this.targetFiles = event.target['files'];
    this.upload = this.targetFiles[0];

    if (this.upload.type.includes('image')) 
      this.file = new CustomUpload(this.upload);

    const reader = new FileReader();
    reader.onload = () => (this.upload['url'] = reader.result);
    reader.readAsDataURL(this.upload);

  }

  cloudQueue() {
    this.cloudRef = this.dialog.open(CloudQueueDialogComponent, { data: {  } });
    this.cloudRef.beforeClose().subscribe((data: any) => {
      try {
        this.newUrl = data.url;
      } catch(e) { }
    });
    this.cloudRef.backdropClick().subscribe(() => (this.newUrl = ''));
    this.cloudRef.keydownEvents().subscribe(() => (this.newUrl = ''));
  }

  onSubmit(option: string) {

    switch(option) {
      case 'display': {
        const control = this.preferencesForm.get('updateDisplay').get('display').invalid;
        if (control) { alert('Form invalid'); return; }

        const form = this.preferencesForm.value['updateDisplay'];
        this.confirmationRef = this.dialog.open(UpdateConfirmationDialogComponent, { data: { form, option: 'display' } });
        break;
      }
      case 'email': {
        const control = this.preferencesForm.get('updateEmail').get('email').invalid;
        if (control) { alert('Form invalid'); return; }

        const form = this.preferencesForm.value['updateEmail'];
        this.confirmationRef = this.dialog.open(UpdateConfirmationDialogComponent, { data: { form, option: 'email' } });
        break;
      }
      case 'password': {
        const control = this.preferencesForm.get('updatePassword').get('password').invalid;
        const control2 = this.preferencesForm.get('updatePassword').get('confirm').invalid;
        if (control || control2) { alert('Form invalid'); return; }

        const form = this.preferencesForm.value['updatePassword'];
        this.confirmationRef = this.dialog.open(UpdateConfirmationDialogComponent, { data: { form, option: 'password' } });
        break;
      }
      case 'avatar': {
        const form = this.file;

        try {
          if (this.newUrl.length > 0) {
            this.dialog.open(UpdateConfirmationDialogComponent, { data: { form, option: 'avatar', newUrl: this.newUrl } });
          } else if (this.upload['url']) {
            this.dialog.open(UpdateConfirmationDialogComponent, { data: { form, option: 'avatar', newUrl: this.newUrl } });
          }
        } catch(e) { }

        break;
      }
    }

  }

}

class CustomValidator {
  static containAlpha(control: AbstractControl): ValidationErrors | null {
    const CONTAIN_LOWERCASE_REGEXP: RegExp = /[a-z]/;
    return CONTAIN_LOWERCASE_REGEXP.test(control.value) ? null : { containsAlpha: true };
  }
  static containsNone(control: AbstractControl): ValidationErrors | null {
    const condition = String(control.value).length !== 0;
    return condition ? null : { containsNone: true };
  }
}
