import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntbpListComponent } from './intbp-list/intbp-list.component';
import { IntbpDetailComponent } from './intbp-detail/intbp-detail.component';

const intbpsRoutes: Routes = [
  { path: 'intbps', redirectTo: '/intbps' },
  { path: 'intbp/:id', redirectTo: '/detailintbp/:id' },
  { path: 'intbps',  component: IntbpListComponent, data: { animation: 'intbps' } },
  { path: 'detailintbp/:id', component: IntbpDetailComponent, data: { animation: 'intbp' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(intbpsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntbpsRoutingModule { }
