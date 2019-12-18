import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherplaceService {

  OnotherplaceDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OnotherplaceDataChanged = new BehaviorSubject([]);
  }

    resolve(route: ActivatedRouteSnapshot) { 
    this.getotherplaceData2();
  }

  getotherplaceData2() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/places').subscribe((res: any) => {
        this.OnotherplaceDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
