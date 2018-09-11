import { Injectable } from '@angular/core';
import {UsersModel} from './users.model';
import { SharedService } from './shared.service';
import { Observable, Subject , of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class CommonService{
    public users:UsersModel;
    private subject = new Subject<any>();
    private subject2 = new Subject<any>();
     constructor(private sharedService:SharedService,private http:HttpClient){}

     setUsers(){
      this.sharedService.getUsers().subscribe(users =>{
       this.users = users;
        this.subject2.next(users);
    }); 
      
     }

    
    sendUser(user) {
      this.users.names.push(user);
      console.log("send user fn",this.users);
    this.subject2.next(this.users);
     //return this.subject2.asObservable();
     // this.subject.next(user);
    }
    editUser(index){
       console.log("index :",index);
      console.log("send user fn",this.users);
    this.subject2.next(this.users);
    }
  
 
    getUsers(){
      console.log("users in service :",this.users);
      console.log("Observable :",this.subject2.asObservable());
    //this.subject2.next(this.users);
   return this.subject2.asObservable();
    }
    getUsersFromService(){
      return this.users;
    }

    private handleError() {
        return (error: any): Observable<UsersModel> => {
          console.error(error);
          return of({ names:[]});
        };
      }
}