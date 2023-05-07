import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ]
})
export class ContactsModule {}
