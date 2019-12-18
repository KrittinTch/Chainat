import { PlaceService } from './place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  placedata: any;

  constructor(public placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.OnPlaceDataChanged.subscribe((res: any) => {
      this.placedata = res[0];
      console.log(this.placedata)
    })
  }
}
