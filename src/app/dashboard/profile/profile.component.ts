import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../common/core/services/firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Observable<any>;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.user = this.firestore.currentUser;
  }

}
