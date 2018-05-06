import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from './common/core/services/shared.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) {
    // this.router.navigate(['dashboard']);
    this.sharedService.modeValue = true;
  }

}
