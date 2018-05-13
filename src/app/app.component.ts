import { Component } from '@angular/core';

import { SharedService } from './common/core/services/shared.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private sharedService: SharedService) {
    this.sharedService.modeValue = true;
  }

}
