import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Intbp} from '../intbp';
import {IntbpService} from '../intbp.service';

@Component({
  selector: 'app-intbp-detail',
  templateUrl: './intbp-detail.component.html',
  styleUrls: ['./intbp-detail.component.css']
})
export class IntbpDetailComponent implements OnInit {
  intbp$!: Observable<Intbp>;

  constructor(private route: ActivatedRoute, private router: Router, private service: IntbpService) {
  }


  ngOnInit() {
    this.intbp$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getIntbp(params.get('id')!)));
  }

  gotoIntbps(intbp: Intbp) {
    const intbpId = intbp ? intbp.id : null;
    // Pass along the intbp id if available
    // so that the IntbpList component can select that intbp.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/intbps', {id: intbpId, foo: 'foo'}]);
  }
}
