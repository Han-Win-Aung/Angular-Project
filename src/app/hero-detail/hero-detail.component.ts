import { HeroService } from './../services/hero.service';
import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
    ngOnInit() {
    this.route.params.switchMap((params: Params) =>
    this.heroService.getHero(+params['id'])).subscribe(hero => this.hero =
    hero);
    }
    goBack(): void {
      this.location.back();
      }
}
