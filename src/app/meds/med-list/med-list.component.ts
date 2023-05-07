// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedService } from '../med.service';
import { Med } from '../med';

@Component({
  selector: 'app-med-list',
  templateUrl: './med-list.component.html',
  styleUrls: ['./med-list.component.css']
})
export class MedListComponent implements OnInit {
  meds$!: Observable<Med[]>;
  selectedId = 0;

  constructor(
    private service: MedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meds$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getMeds();
      })
    );
  }
}
