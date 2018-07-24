import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient} from "@angular/common/http";
import { map} from "rxjs/operators";


@Injectable()
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses(){
    console.log("api function hit")
    return this.http.get('https://uxcobra.com/golfapi/courses.txt')
      .pipe(map(res=>res));
      //.subscribe(result => result);
  }
}
