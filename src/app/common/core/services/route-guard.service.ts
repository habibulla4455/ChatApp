import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanActivateChild
} from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { SharedService } from './shared.service';

@Injectable({ providedIn: 'root' })
export class EntryGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.state.map((_state) => {
      _state === null ? this.router.navigate(['/']) : 0;
      return _state !== null;
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

}

@Injectable({ providedIn: 'root' })
export class ExitGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.state.map((_state) => {
      _state !== null ? this.router.navigate(['/dashboard']) : 0;
      return _state === null;
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

}


@Injectable({ providedIn: 'root' })
export class RoomGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private shared: SharedService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.shared.enterChange.subscribe((response) => {

      console.log(response);

    });

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

}
