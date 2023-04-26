import { Component } from '@angular/core';
import { Hero } from 'D:/AngularProject/Project1/src/app/hero';
import { HeroService } from 'D:/AngularProject/Project1/src/app/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  export class AppComponent{
    title = 'Tour of Heroes';
    heroes: Hero[] = [];
    

  }