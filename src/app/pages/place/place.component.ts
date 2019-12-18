import { PlaceService } from './place.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  placedata: any;

  constructor(public placeService: PlaceService,
    private router: Router) { }

  ngOnInit() {
    this.placeService.OnPlaceDataChanged.subscribe((res: any) => {
      this.placedata = res[0];
      console.log(this.placedata)
    })
  }

  onToTemple(){
    this.router.navigate(["/temple"]);
  }

  onToRestaurant(){
    this.router.navigate(["/restaurant"]);
  }

  onToCafe(){
    this.router.navigate(["/cafe"]);
  }

  onToOtherplace(){
    this.router.navigate(["/otherplace"]);
  }

}
