// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfrabpService } from '../infrabp.service';
import { Infrabp } from '../infrabp';

@Component({
  selector: 'app-infrabp-list',
  templateUrl: './infrabp-list.component.html',
  styleUrls: ['./infrabp-list.component.css']
})
export class InfrabpListComponent implements OnInit {
  infrabps$!: Observable<Infrabp[]>;
  selectedId = 0;

  constructor(
    private service: InfrabpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.infrabps$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getInfrabps();
      })
    );
  }
}
