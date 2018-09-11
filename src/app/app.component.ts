import { Component,OnInit } from '@angular/core';
import {SharedService} from './shared/shared.service'
import { CommonService } from './shared/common-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'Assignment';

  constructor(private sharedService:SharedService,private commonService:CommonService){

  }
  sendMessage(): void {
    // send message to subscribers via observable subject
  }
  ngOnInit(){
    console.log("NEW:");
    this.commonService.setUsers();
    
    
  }
}
