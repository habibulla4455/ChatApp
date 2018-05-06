import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  roomChanged: Subject<any> = new Subject<any>();
  modeChanged: Subject<boolean> = new Subject<boolean>();

  room: any;

  constructor() { }

  set roomDetails(room: any) {
    this.roomChanged.next(room);
    this.room = room;
  }

  set modeValue(mode: boolean) {
    this.modeChanged.next(mode);
  }

}
