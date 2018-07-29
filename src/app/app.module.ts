//import { MaterializeModule} from "angular2-materialize";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlayersComponent } from './components/players/players.component';
import { DataServiceService} from "./services/data-service.service";
import { HttpClient} from "@angular/common/http";
import { HttpClientModule} from "@angular/common/http";
import { ScoreCardComponent } from './components/score-card/score-card.component';

const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'courses', component:CoursesComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'scorecard', component:ScoreCardComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    CoursesComponent,
    PlayersComponent,
    PlayersComponent,
    ScoreCardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //MaterializeModule
    
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
