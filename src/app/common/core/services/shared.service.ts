import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  enterChange: Subject<any> = new Subject<any>();
  roomChanged: Subject<any> = new Subject<any>();
  modeChanged: Subject<boolean> = new Subject<boolean>();

  room: any;

  constructor() { }

  set setEnter(mode: boolean) {
    this.enterChange.next(mode);
  }

  set roomDetails(room: any) {
    this.roomChanged.next(room);
    this.room = room;
  }

  set modeValue(mode: boolean) {
    this.modeChanged.next(mode);
  }

}
