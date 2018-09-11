import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {UsersModel} from './users.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class SharedService {
    
   constructor(private http:HttpClient) { }

   getUsers (): Observable<UsersModel> {
    let url = '/assets/stub/db.json';
  
  
      return this.http.get<UsersModel>(url,httpOptions).pipe(

        catchError(this.handleError())
      );
  

  }

  private handleError() {
    return (error: any): Observable<UsersModel> => {
      console.error(error);
      return of({ names:[]});
    };
  }

}