import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apibp } from './apibp';
import { APIBPS } from './mock-apibps';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class ApibpService {

  constructor(private messageService: MessageService) { }

  getApibps(): Observable<Apibp[]> {
    // TODO: send the message _after_ fetching the apibps
    this.messageService.add('ApibpService: fetched apibps');
    return of(APIBPS);
  }

  getApibp(id: number | string) {
    return this.getApibps().pipe(
      // (+) before `id` turns the string into a number
      map((apibps: Apibp[]) => apibps.find(apibp => apibp.id === +id)!)
    );
  }
}

