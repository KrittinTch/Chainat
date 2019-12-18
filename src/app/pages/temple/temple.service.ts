import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempleService {


  OnPlaceData2Changed : BehaviorSubject<any>;
  
  constructor(public http: HttpClient) { 
    this.OnPlaceData2Changed = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot) { 
    this.getPlacesData2();
  }

  getPlacesData2() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/places').subscribe((res: any) => {
        this.OnPlaceData2Changed.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
