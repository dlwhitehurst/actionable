import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Infrabp} from '../infrabp';
import {InfrabpService} from '../infrabp.service';

@Component({
  selector: 'app-infrabp-detail',
  templateUrl: './infrabp-detail.component.html',
  styleUrls: ['./infrabp-detail.component.css']
})
export class InfrabpDetailComponent implements OnInit {
  infrabp$!: Observable<Infrabp>;

  constructor(private route: ActivatedRoute, private router: Router, private service: InfrabpService) {
  }


  ngOnInit() {
    this.infrabp$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getInfrabp(params.get('id')!)));
  }

  gotoInfrabps(Infrabp: Infrabp) {
    const InfrabpId = Infrabp ? Infrabp.id : null;
    // Pass along the Infrabp id if available
    // so that the InfrabpList component can select that Infrabp.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/infrabps', {id: InfrabpId, foo: 'foo'}]);
  }
}
