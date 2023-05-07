// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IntbpService } from '../intbp.service';
import { Intbp } from '../intbp';

@Component({
  selector: 'app-infrabp-list',
  templateUrl: './intbp-list.component.html',
  styleUrls: ['./intbp-list.component.css']
})
export class IntbpListComponent implements OnInit {
  intbps$!: Observable<Intbp[]>;
  selectedId = 0;

  constructor(
    private service: IntbpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.intbps$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getIntbps();
      })
    );
  }
}
