import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-reauth-dialog',
  templateUrl: './reauth-dialog.component.html',
  styleUrls: ['./reauth-dialog.component.scss']
})
export class ReauthDialogComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, private dialogRef: MatDialogRef<ReauthDialogComponent>) {
    this.passwordForm = fb.group({
      'password': [ '', [  Validators.required ] ],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const password = this.passwordForm.value.password;
    this.dialogRef.close(password);
  }

}
