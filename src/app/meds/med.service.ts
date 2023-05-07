import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Med } from './med';
import { MEDS } from './mock-meds';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class MedService {

  constructor(private messageService: MessageService) { }

  getMeds(): Observable<Med[]> {
    // TODO: send the message _after_ fetching the meds
    this.messageService.add('MedService: fetched meds');
    return of(MEDS);
  }

  getMed(id: number | string) {
    return this.getMeds().pipe(
      // (+) before `id` turns the string into a number
      map((meds: Med[]) => meds.find(med => med.id === +id)!)
    );
  }
}

