import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-join-room-confirmation-dialog',
  templateUrl: './join-room-confirmation-dialog.component.html',
  styleUrls: ['./join-room-confirmation-dialog.component.scss']
})
export class JoinRoomConfirmationDialogComponent implements OnInit {

  confirmationForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private sharedService: SharedService) {
    this.confirmationForm = fb.group({
      'password': [ '', [ Validators.required ] ],
    })
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.confirmationForm.invalid) return;

    const roomPassword = this.data.room.room_password;
    const enteredPassword = this.confirmationForm.value.password;

    if (roomPassword === enteredPassword) {
      this.sharedService.roomDetails = this.data.room;
      this.router.navigate(['/', 'dashboard', 'room'])
      this.dialog.closeAll()
    } else {
      alert('wrong password');
      this.confirmationForm.patchValue({ 'password': '' });
    }

  }

}
