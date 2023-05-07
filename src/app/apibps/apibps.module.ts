import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApibpListComponent } from './apibp-list/apibp-list.component';
import { ApibpDetailComponent } from './apibp-detail/apibp-detail.component';

import { ApibpsRoutingModule } from './apibps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApibpsRoutingModule
  ],
  declarations: [
    ApibpListComponent,
    ApibpDetailComponent
  ]
})
export class ApibpsModule {}
