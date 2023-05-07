// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApibpService } from '../apibp.service';
import { Apibp } from '../apibp';

@Component({
  selector: 'app-apibp-list',
  templateUrl: './apibp-list.component.html',
  styleUrls: ['./apibp-list.component.css']
})
export class ApibpListComponent implements OnInit {
  apibps$!: Observable<Apibp[]>;
  selectedId = 0;

  constructor(
    private service: ApibpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.apibps$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getApibps();
      })
    );
  }
}
