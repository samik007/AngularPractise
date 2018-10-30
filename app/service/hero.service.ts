import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from '../shared/mock-heroes';
import { Hero } from '../shared/Hero';
import { MessageService } from '../service/message.service';

@Injectable()
export class HeroService{
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage('Fetched Heroes by Id');
    return of(HEROES.find(hero => hero.id == id));
  }
}
