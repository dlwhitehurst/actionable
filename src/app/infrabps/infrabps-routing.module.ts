import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfrabpListComponent } from './infrabp-list/infrabp-list.component';
import { InfrabpDetailComponent } from './infrabp-detail/infrabp-detail.component';

const infrabpsRoutes: Routes = [
  { path: 'infrabps', redirectTo: '/infrabps' },
  { path: 'infrabp/:id', redirectTo: '/detailinfrabp/:id' },
  { path: 'infrabps',  component: InfrabpListComponent, data: { animation: 'infrabps' } },
  { path: 'detailinfrabp/:id', component: InfrabpDetailComponent, data: { animation: 'infrabp' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(infrabpsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InfrabpsRoutingModule { }
