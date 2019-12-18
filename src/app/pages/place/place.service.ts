import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  OnPlaceDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OnPlaceDataChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot) { 
    this.getPlacesData();
  }

  getPlacesData() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/places').subscribe((res: any) => {
        this.OnPlaceDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
