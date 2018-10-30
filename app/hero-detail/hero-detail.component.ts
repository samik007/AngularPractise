import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../shared/Hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  id: number;

  constructor(private route: ActivatedRoute,
                private heroService: HeroService,
                  private location: Location) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      )

     this.getHero(); 
  }

  getHero(){
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
