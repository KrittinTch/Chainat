import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  OnrestaurantData2Changed : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OnrestaurantData2Changed = new BehaviorSubject([]);
  }


  resolve(route: ActivatedRouteSnapshot) { 
    this.getRestaurantData2();
  }

  getRestaurantData2() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/places').subscribe((res: any) => {
        this.OnrestaurantData2Changed.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
