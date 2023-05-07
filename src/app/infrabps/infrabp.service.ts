import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Infrabp } from './infrabp';
import { INFRABPS } from './mock-infrabps';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class InfrabpService {

  constructor(private messageService: MessageService) { }

  getInfrabps(): Observable<Infrabp[]> {
    // TODO: send the message _after_ fetching the infrabps
    this.messageService.add('InfrabpService: fetched infrabps');
    return of(INFRABPS);
  }

  getInfrabp(id: number | string) {
    return this.getInfrabps().pipe(
      // (+) before `id` turns the string into a number
      map((infrabps: Infrabp[]) => infrabps.find(infrabp => infrabp.id === +id)!)
    );
  }
}

