import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  roomChanged: Subject<any> = new Subject<any>();
  modeChanged: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  set roomDetails(room: any) {
    this.roomChanged.next(room);
  }

  set modeValue(mode: boolean) {
    this.modeChanged.next(mode);
  }

}
