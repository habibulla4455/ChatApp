import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-confirmation-dialog',
  templateUrl: './update-confirmation-dialog.component.html',
  styleUrls: ['./update-confirmation-dialog.component.scss']
})
export class UpdateConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<UpdateConfirmationDialogComponent>) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onUpdate() {
    switch(this.data.option) {
      case 'display':
        this.updateDisplay();
        break;
      case 'email':
        this.updateEmailI();
        break;
      case 'password':
        this.updatePassword();
        break;
      case 'avatar':
        this.updateAvatar();
        break;
      default: break;
    }
  }

  updateDisplay() {
    console.log('display', this.data.form);
    this.dialogRef.close();
  }

  updateEmailI() {
    console.log('email', this.data.form);
    this.dialogRef.close();
  }

  updatePassword() {
    console.log('password', this.data.form);
    this.dialogRef.close();
  }

  updateAvatar() {
    console.log('avatar', this.data.form);
    console.log('avatar', this.data.newUrl);
    this.dialogRef.close();
  }

}
