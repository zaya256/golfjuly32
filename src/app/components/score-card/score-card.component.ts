import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router' 
import { DataServiceService} from "../../services/data-service.service"
@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  public course:any;
  public difficulty:any;
  public players:any;
  public position:any;
  public courseData: any;
  public holeData: Array <any>;
  public dataPoints: Array<Array<any>>=[[],[],[]];
  public totals: Array<any>=[];

  public total: any;
  
    constructor(private route:ActivatedRoute,
                private router:Router,
                private dataService: DataServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.course = params["course"];
      this.difficulty = params["difficulty"];
      this.players = params["players"];
      this.position = params["position"]
    })
    console.log("nav vars " +this.course + " " + this.difficulty + " " + this.position + " " + this.players)
    this.dataService.getCourseById(this.course)
  .subscribe((res)=>{
    console.log(res);
    this.courseDataFunction(res)
  })
  for(var i=0;i<this.players.length;i++){
    for(var x=0;x<this.holeData.length;x++){
      this.dataPoints[i][x] = null;
    }    
  }
    }    

  

    courseDataFunction(data){
      this.courseData = data;
      console.log(this.courseData + " " +JSON.stringify(data))
      console.log(JSON.stringify(data["data"]["holes"][0]["teeBoxes"][this.position]))
      var arr = [];
      for(var i=0;i<18;i++){
        console.log(JSON.stringify(data["data"]["holes"][i]["teeBoxes"][this.position]))
        arr.push(data["data"]["holes"][i]["teeBoxes"][this.position])
      }
      this.holeData = arr;
      console.log("final data " +this.holeData)
  /*
      for(var i=0;i<data["data"]["holes"].length;i++){
        console.log(i)
        this.holeData.push(data)
        //["teeBoxes"][this.position]
          }
          console.log("all of the hole data")
          console.log(this.holeData)
  */
  
  
    }


    addScores(){
    
      var arr = [];
      for(var i=0;i<this.players.length;i++){
        var total = 0;
        for(var x=0;x<this.holeData.length;x++){
          if (this.dataPoints[i][x]!=null){
          total = total + parseInt(this.dataPoints[i][x])
        }
      }
        arr.push(total)
      }
      console.log(arr)
      this.totals=arr;
    }
   


}
