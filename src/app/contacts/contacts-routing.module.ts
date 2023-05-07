import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const contactsRoutes: Routes = [
  { path: 'contacts', redirectTo: '/contacts' },
  { path: 'contact/:id', redirectTo: '/detailcontact/:id' },
  { path: 'contacts',  component: ContactListComponent, data: { animation: 'contacts' } },
  { path: 'detailcontact/:id', component: ContactDetailComponent, data: { animation: 'contact' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
