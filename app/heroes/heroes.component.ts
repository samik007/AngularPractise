import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/Hero';
import { HEROES } from '../shared/mock-heroes';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}