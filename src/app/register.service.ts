import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from './status';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrlprefix = '/student/save';  // URL to web api

  constructor(private http: HttpClient) { }

    /** GET students from the server */
    registerStudent(name:string, age:number, regNum : string) : Observable<Status> {
    let registerUrl= this.registerUrlprefix+"?name="+name+"&age="+age+"&regNum="+regNum;
    return this.http.get<Status>(registerUrl)
    } 
}
