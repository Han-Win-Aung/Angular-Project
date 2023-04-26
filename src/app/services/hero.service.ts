import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    }
  
  constructor() { }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
