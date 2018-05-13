import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../common/core/services/firestore.service';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss']
})
export class DrawerContentComponent implements OnInit {

  onlineUsers: Observable<any>;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.onlineUsers = this.firestore.onlineUsers
  }

}
