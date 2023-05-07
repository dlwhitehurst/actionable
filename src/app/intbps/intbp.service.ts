import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Intbp } from './intbp';
import { INTBPS } from './mock-intbps';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class IntbpService {

  constructor(private messageService: MessageService) { }

  getIntbps(): Observable<Intbp[]> {
    // TODO: send the message _after_ fetching the intbps
    this.messageService.add('IntbpService: fetched intbps');
    return of(INTBPS);
  }

  getIntbp(id: number | string) {
    return this.getIntbps().pipe(
      // (+) before `id` turns the string into a number
      map((intbps: Intbp[]) => intbps.find(intbp => intbp.id === +id)!)
    );
  }
}

