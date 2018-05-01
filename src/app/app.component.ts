import { Component } from '@angular/core';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor() {
    // const firestore = firebase.firestore();
    //
    // const settings = <firebase.firestore.Settings>{
    //   timestampsInSnapshots: true,
    //   host: 'localhost:7000',
    //   ssl: false
    // };
    //
    // firestore.settings(settings);
  }

}
