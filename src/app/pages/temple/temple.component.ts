import { TempleService } from './temple.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.scss']
})
export class TempleComponent implements OnInit {
  placedata2: any;

  constructor(public templeService: TempleService) { }

  ngOnInit() {
    this.templeService.OnPlaceData2Changed.subscribe((res: any) => {
      this.placedata2 = res[0];
      console.log(this.placedata2)
    })
  }

}
