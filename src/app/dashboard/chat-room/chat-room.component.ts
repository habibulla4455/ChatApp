import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MatDrawer, MatDialog } from '@angular/material';

import { FirestoreService } from '../../common/core/services/firestore.service';
import { AuthService } from '../../common/core/services/auth.service';
import { SharedService } from '../../common/core/services/shared.service';

import { Room } from '../../common/shared/models/model';

import { RoomDetailsDialogComponent } from '../../common/shared/components/room-details-dialog/room-details-dialog.component';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('content') content: ElementRef;

  messages: Observable<any>;
  roomDetails: Room;
  textarea: string = '';
  element: Element;
  condition: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private firestore: FirestoreService, private auth: AuthService, private sharedService: SharedService) { }

  ngOnInit() {

    this.dialog.closeAll();

    this.route.data.subscribe((data: Data) => {
      this.roomDetails = data.room;
    });

    this.condition = this.roomDetails.num_participants === Infinity;

    this.sharedService.modeValue = true;
    this.messages = this.firestore.messages(this.roomDetails.room_name);

    this.element = this.content.nativeElement;
    setTimeout(() => this.scrollToBottom(), 700);

  }

  scrollToBottom() {
    this.element.scrollTop = this.element.scrollHeight;
  }

  seeRoomDetails() {
    this.dialog.open(RoomDetailsDialogComponent, { data: { room: this.roomDetails } });
  }

  onShowProfile(message: any) {
    this.firestore.profile(message.uid);
  }

  onSubmit() {

    if (this.textarea.length < 1) {
      alert('Empty field');
      return;
    }

    this.firestore.newMessage(this.textarea, this.roomDetails.room_name)
      .then(() => {
        this.scrollToBottom();
      });
    this.textarea = '';

  }

}
