import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../../../common/core/services/firestore.service';
import { SharedService } from '../../../common/core/services/shared.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  constructor(private firestore: FirestoreService, private sharedService: SharedService) { }

  ngOnInit() {

    

  }


}
