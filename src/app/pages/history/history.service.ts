import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  
  OnHistoryDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) {
    this.OnHistoryDataChanged = new BehaviorSubject({});
   }

  resolve(route: ActivatedRouteSnapshot) { 
    this.getHistoryData();
  }

  getHistoryData() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/historys').subscribe((res: any) => {
        this.OnHistoryDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
   

}
