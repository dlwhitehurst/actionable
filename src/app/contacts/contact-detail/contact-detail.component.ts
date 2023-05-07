import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Contact} from '../contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact$!: Observable<Contact>;

  constructor(private route: ActivatedRoute, private router: Router, private service: ContactService) {
  }


  ngOnInit() {
    this.contact$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getContact(params.get('id')!)));
  }

  gotoContacts(contact: Contact) {
    const contactId = contact ? contact.id : null;
    // Pass along the contact id if available
    // so that the ContactList component can select that contact.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/contacts', {id: contactId, foo: 'foo'}]);
  }
}
