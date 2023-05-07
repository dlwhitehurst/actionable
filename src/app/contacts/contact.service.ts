import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ContactService: ${message}`);
  }

  private contactsUrl = 'http://localhost:8081/camel/api/v1/contacts';  // URL to web api
  
  handleError(title: string) {
	  return null;
  }

  getContacts(): Observable<Contact[]> {
    //console.log(this.http.get<Contact[]>(this.contactsUrl));
    //return this.http.get<Contact[]>(this.contactsUrl)
	  return of(CONTACTS);
	  //return null;
  }

  getContact(id: number | string) {
    return this.getContacts().pipe(
      // (+) before `id` turns the string into a number
      map((contacts: Contact[]) => contacts.find(contact => contact.id === +id)!)
    );
  }
}

