import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService, private router: Router) {}
goToDetail(): void {
this.router.navigate(['/detail', this.selectedHero.id]);
}
  ngOnInit(): void {
  this.getHeroes();
  }
  getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  

}
