import { Component, OnInit } from '@angular/core';
import { DataServiceService} from '../../services/data-service.service';
import {AfterViewInit,ElementRef} from "@angular/core";
import {Course } from "../../services/course";
import { Router, NavigationExtras } from '@angular/router';
import {FormsModule } from "@angular/forms";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courseInfo: any;
  public image: any;
  public info: any;
  public id: any;
  public course: any;
  public difficulty: Array<string>;
  public name: any;
  public chosenDifficulty: any;
  public chosenDifficultyPosition: any;

  constructor(private dataService: DataServiceService,
              private router: Router
  ) { }
  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.getElementById("drop")
  //   //you can reach your dom element by using
  //   //this.elementRef.nativeElement
//}

  ngOnInit() {
    this.getSomething()



  }
  getSomething() {
    return this.dataService.getCourses()
         .subscribe(res=>{
           this.dataFunction(res)
         })
   }

   dataFunction(data){
     console.log('this is the data ' + data)
     this.courseInfo = data
     //way of storing and displaying courseinfo
     console.log(JSON.stringify(data))
     console.log(this.courseInfo)

   }

   courseDataFunction(data){
    console.log("course data by id "+data)
    console.log(data['data']['holes'])
    var arr = [];
    data["data"]["holes"][0]["teeBoxes"].forEach(function(hole){
      console.log(hole["teeType"])
      arr.push(hole["teeType"])
    })
    console.log(arr)
    this.difficulty = arr;
   
  }

   onCourseClick(){
   console.log("click 1")
   this.image = this.courseInfo[0].image
   this.id = this.courseInfo[0].id
   this.name = this.courseInfo[0].name
   this.dataService.getCourseById(this.id)
    .subscribe(res=>{
      console.log(res);
      this.courseDataFunction(res)
    })

   }
   onCourse2Click(){
     console.log("click 2")
     this.image = this.courseInfo[1].image
     this.id = this.courseInfo[1].id
     this.name = this.courseInfo[1].name
     this.dataService.getCourseById(this.id)
    .subscribe(res=>{
      console.log(res);
      this.courseDataFunction(res)
    })


   }
   onCourse3Click(){
     console.log("click 3")
     this.image = this.courseInfo[2].image
     this.id = this.courseInfo[2].id
     this.name = this.courseInfo[2].name
     this.dataService.getCourseById(this.id)
    .subscribe(res=>{
      console.log(res);
      this.courseDataFunction(res)
    })



   }
   test(){
     console.log('works')
   }

   playThisCourse(){
   let navigationExtras: NavigationExtras = {
     queryParams:{
       "course":this.id,
       "difficulty":this.chosenDifficulty,
       "position": this.chosenDifficultyPosition
     }
   }
   this.router.navigate(['players'],navigationExtras)


   }
  setDifficulty(difficulty){
    this.chosenDifficultyPosition = difficulty.indexOf(difficulty)
    this.chosenDifficulty = difficulty;
  }
  //    if(difficulty=="easy"){
  //      this.difficulty = "easy"
  //    }
  //    if(difficulty=="medium"){
  //      this.difficulty = "medium"
  //    }
  //    if(difficulty=="hard"){
  //      this.difficulty = "hard"
  //    }

   //}




}
