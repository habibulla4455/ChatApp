import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MatDrawer } from '@angular/material';

import { FirestoreService } from '../../common/core/services/firestore.service';
import { AuthService } from '../../common/core/services/auth.service';
import { SharedService } from '../../common/core/services/shared.service';

import { Room } from '../../common/shared/models/model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  messages: Observable<any>;
  roomDetails: Room;
  textarea: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private firestore: FirestoreService, private auth: AuthService, private sharedService: SharedService) { }

  ngOnInit() {

    this.route.data.subscribe((data: Data) => {
      const room = data.room;
      this.roomDetails = room;
    });

    this.sharedService.modeValue = true;
    this.messages = this.firestore.messages(this.roomDetails.room_name);

    this.drawer.open();
  }

  onSubmit() {

    if (this.textarea.length < 1) {
      alert('Empty field');
      return;
    }

    this.firestore.newMessage(this.textarea, this.roomDetails.room_name);
    this.textarea = ''

  }

}
