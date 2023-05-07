import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedListComponent } from './med-list/med-list.component';
import { MedDetailComponent } from './med-detail/med-detail.component';

const medsRoutes: Routes = [
  { path: 'meds', redirectTo: '/meds' },
  { path: 'med/:id', redirectTo: '/detailmed/:id' },
  { path: 'meds',  component: MedListComponent, data: { animation: 'meds' } },
  { path: 'detailmed/:id', component: MedDetailComponent, data: { animation: 'med' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(medsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MedsRoutingModule { }
