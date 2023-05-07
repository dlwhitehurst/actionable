import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Med} from '../med';
import {MedService} from '../med.service';

@Component({
  selector: 'app-med-detail',
  templateUrl: './med-detail.component.html',
  styleUrls: ['./med-detail.component.css']
})
export class MedDetailComponent implements OnInit {
  med$!: Observable<Med>;

  constructor(private route: ActivatedRoute, private router: Router, private service: MedService) {
  }


  ngOnInit() {
    this.med$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getMed(params.get('id')!)));
  }

  gotoMeds(med: Med) {
    const medId = med ? med.id : null;
    // Pass along the med id if available
    // so that the MedList component can select that med.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/meds', {id: medId, foo: 'foo'}]);
  }
}
