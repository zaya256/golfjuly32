import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Player } from './player';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public difficulty: any;
  public course: any;
  public fname: any;
  public lname: any;
  public username: any;
  public email: any;
  public players: Array<Array<any>>=[];
  public position: any;

  constructor(private route: Router,
  private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.course = params["course"];
      this.difficulty = params["difficulty"];
      this.position = params["position"]
    })
    console.log("nav vars " +this.course + " " + this.difficulty)
  }

  addPlayer(){
    let newPlayer = [this.fname,this.lname,this.username,this.email];
    console.log(newPlayer)
    this.players.push(newPlayer)
   
  }
  startGame(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "course":this.course,
        "difficulty":this.difficulty,
        "players":this.players,
        "position": this.position
      }
    }
    this.route.navigate(['scorecard'],navigationExtras)
    
  }

  

}
