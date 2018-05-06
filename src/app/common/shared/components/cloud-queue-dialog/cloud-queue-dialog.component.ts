import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const URL_PATTERN: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

@Component({
  selector: 'app-cloud-queue-dialog',
  templateUrl: './cloud-queue-dialog.component.html',
  styleUrls: ['./cloud-queue-dialog.component.scss']
})
export class CloudQueueDialogComponent implements OnInit {

  urlForm: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<CloudQueueDialogComponent>) {
    this.urlForm = fb.group({
      'url': [ 'https://i.pinimg.com/originals/dd/5f/c6/dd5fc62d91748e581b3101101be9bf65.gif', [ Validators.required, Validators.pattern(URL_PATTERN) ] ],
    })
  }

  ngOnInit() {
  }

  get url() {
    return this.urlForm.get('url').errors;
  }

  onSubmit() {
    if (this.urlForm.invalid) return;
    this.dialogRef.close(this.urlForm.value)
  }

}
