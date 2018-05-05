import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

import { SharedService } from '../../common/core/services/shared.service';

@Injectable()
export class ChatRoomResolver implements Resolve<any> {

  constructor(private sharedService: SharedService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sharedService.roomChanged.asObservable().pipe( take(1) );
  }

}
