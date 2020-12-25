import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = '/student/allstudent';  // URL to web api
  private searchByNameUrlprefix = '/student/getStudentByName/' ;
  private searchByAgeUrlprefix = '/student/getStudentByAge/' ;
  private searchByRegNumUrlprefix = '/student/getStudentByRegNum/' ;
  constructor(  private http: HttpClient) { }


  /** GET students from the server */
getStudents() : Observable<Student[]> {
  return this.http.get<Student[]>(this.searchUrl)
}

getStudentByName(name: string) : Observable<Student[]> {
  let nameSearchUrl = this.searchByNameUrlprefix+name;
  return this.http.get<Student[]>(nameSearchUrl)
}

getStudentByAge(age: number) : Observable<Student[]> {
  let nameSearchUrl = this.searchByAgeUrlprefix+age;
  return this.http.get<Student[]>(nameSearchUrl)
}

getStudentByRegNum(regNum: string) : Observable<Student[]> {
  let nameSearchUrl = this.searchByRegNumUrlprefix+regNum;
  return this.http.get<Student[]>(nameSearchUrl)
}
}
