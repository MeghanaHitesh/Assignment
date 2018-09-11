import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { UsersModel } from '../shared/users.model';
import { CommonService } from '../shared/common-service';
import { Subscription } from 'rxjs';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public users:UsersModel;
subscription: Subscription;
subscription2: Subscription;
public user;

  constructor(private commonService:CommonService,private ref: ChangeDetectorRef,private route:Router) { 
    this.subscription2 = this.commonService.getUsers().subscribe(users =>{
 
     this.users = users;
     this.ref.detectChanges();
 
    });
     if(!this.users)
     this.users = this.commonService.getUsersFromService();
 }

  ngOnInit() {
   console.log("user component ngonit");

  }
  edit(user){
    this.route.navigate(["/edit"]);
  }
  delete(index){
    console.log("index:",index);
    this.users.names.splice(index,1);
    //this.commonService.deleteUsers(index);
    
      }

     

      // addUser(user){
         
      //   this.commonService.users.names.push(user);
      //   console.log("users after adding :",this.users);

      // }
      ngOnDestroy(){
        console.log("dead");
        this.subscription2.unsubscribe();
      }

}
