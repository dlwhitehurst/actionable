import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedListComponent } from './med-list/med-list.component';
import { MedDetailComponent } from './med-detail/med-detail.component';

import { MedsRoutingModule } from './meds-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MedsRoutingModule
  ],
  declarations: [
    MedListComponent,
    MedDetailComponent
  ]
})
export class MedsModule {}
