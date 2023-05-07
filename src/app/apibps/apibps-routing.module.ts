import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApibpListComponent } from './apibp-list/apibp-list.component';
import { ApibpDetailComponent } from './apibp-detail/apibp-detail.component';

const apibpsRoutes: Routes = [
  { path: 'apibps', redirectTo: '/apibps' },
  { path: 'apibp/:id', redirectTo: '/detailapibp/:id' },
  { path: 'apibps',  component: ApibpListComponent, data: { animation: 'apibps' } },
  { path: 'detailapibp/:id', component: ApibpDetailComponent, data: { animation: 'apibp' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(apibpsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApibpsRoutingModule { }
