import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  
  OncafeDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OncafeDataChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot) { 
    this.getCafeData2();
  }

  getCafeData2() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/places').subscribe((res: any) => {
        this.OncafeDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
