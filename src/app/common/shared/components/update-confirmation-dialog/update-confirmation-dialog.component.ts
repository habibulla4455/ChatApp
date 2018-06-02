import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PreferenceService } from '../../../core/services/preference.service';

@Component({
  selector: 'app-update-confirmation-dialog',
  templateUrl: './update-confirmation-dialog.component.html',
  styleUrls: ['./update-confirmation-dialog.component.scss']
})
export class UpdateConfirmationDialogComponent implements OnInit {

  isShow: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<UpdateConfirmationDialogComponent>, private preferenceService: PreferenceService) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onUpdate() {
    this.isShow = true;

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
    const form = this.data.form;
    this.preferenceService.updateDisplay(form);
  }

  updateEmailI() {
    const form = this.data.form;
    this.preferenceService.updateEmailI(form);
  }

  updatePassword() {
    const form = this.data.form;
    this.preferenceService.updatePassword(form);
  }

  updateAvatar() {
    const form = this.data.form;
    const newUrl = this.data.newUrl;
    this.preferenceService.updateAvatar(form, newUrl);
  }

}
