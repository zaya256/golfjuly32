import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "../../services/data-service.service";
import {AfterViewInit,ElementRef} from "@angular/core";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 

  private courses: any;

  constructor(protected elementRef: ElementRef,
    private dataService: DataServiceService
  ) { }
  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.getElementById("drop")
  //   //you can reach your dom element by using
  //   //this.elementRef.nativeElement
//}

  ngOnInit() {
    this.getCourseData()
    console.log("final courses object")
    console.log(this.courses);



  }
getCourseData(){
    console.log("course data functions");
  this.dataService.getCourses().subscribe((data)=>{
    console.log(JSON.stringify(data));
    this.courses = JSON.stringify(data);
  })
}

}
