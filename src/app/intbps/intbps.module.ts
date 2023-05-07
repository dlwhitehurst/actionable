import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntbpListComponent } from './intbp-list/intbp-list.component';
import { IntbpDetailComponent } from './intbp-detail/intbp-detail.component';

import { IntbpsRoutingModule } from './intbps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IntbpsRoutingModule
  ],
  declarations: [
    IntbpListComponent,
    IntbpDetailComponent
  ]
})
export class IntbpsModule {}
