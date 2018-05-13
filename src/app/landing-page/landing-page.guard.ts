import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../common/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const promise = new Promise(
      (resolve, reject) => {
        this.auth.authState.subscribe((state: any) => {
          resolve(state !== null);
        });
      }
    );

    return promise.then((data: boolean) => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }

}
