import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Apibp} from '../apibp';
import {ApibpService} from '../apibp.service';

@Component({
  selector: 'app-infrabp-detail',
  templateUrl: './apibp-detail.component.html',
  styleUrls: ['./apibp-detail.component.css']
})
export class ApibpDetailComponent implements OnInit {
  apibp$!: Observable<Apibp>;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApibpService) {
  }


  ngOnInit() {
    this.apibp$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getApibp(params.get('id')!)));
  }

  gotoApibps(Apibp: Apibp) {
    const ApibpId = Apibp ? Apibp.id : null;
    // Pass along the Apibp id if available
    // so that the ApibpList component can select that Apibp.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/apibps', {id: ApibpId, foo: 'foo'}]);
  }
}
