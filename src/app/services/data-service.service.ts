import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient} from "@angular/common/http";
import { map} from "rxjs/operators";
import { Observable} from "rxjs";
import { Course } from "./course";


@Injectable()
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]>{
    console.log("api function hit")
    return this.http.get('https://uxcobra.com/golfapi/courses.txt').pipe(
      map(
        (response: any) => {
          return response.courses;
      }
    )
  );
};

getCourseById(theID){
  let url = "https://uxcobra.com/golfapi/course" + theID +".txt";
  console.log("this is the get url " + url)
  return this.http.get(url).pipe(
    map((response: any) => {
      console.log(response)
      return response;
      }

    )
  )
}

};
