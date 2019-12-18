import { CafeService } from './cafe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {
  cafedata2: any;

  constructor(public cafeService: CafeService) { }

  ngOnInit() {
    this.cafeService.OncafeDataChanged.subscribe((res: any) => {
      this.cafedata2 = res[0];
      console.log(this.cafedata2)
    })
  }

}
