import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InfrabpListComponent } from './infrabp-list/infrabp-list.component';
import { InfrabpDetailComponent } from './infrabp-detail/infrabp-detail.component';

import { InfrabpsRoutingModule } from './infrabps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InfrabpsRoutingModule
  ],
  declarations: [
    InfrabpListComponent,
    InfrabpDetailComponent
  ]
})
export class InfrabpsModule {}
