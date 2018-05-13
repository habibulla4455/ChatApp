import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../common/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<any> {

  constructor(private auth: AuthService) { }

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    return new Promise(
      (resolve, reject) => {
        this.auth.auth.authState
          .map((state) => {
            if (state.isAnonymous !== null) {
              return state.isAnonymous;
            }
          })
          .subscribe((isAnonymous) => resolve(isAnonymous));
      }
    ).then(a => a);
  }

}
