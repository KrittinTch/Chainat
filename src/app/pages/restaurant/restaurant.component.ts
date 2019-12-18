import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurantdata2: any;

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.OnrestaurantData2Changed.subscribe((res: any) => {
      this.restaurantdata2 = res[0];
      console.log(this.restaurantdata2)
    })
  }
}
