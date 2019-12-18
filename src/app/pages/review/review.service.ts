import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  OnreviewDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OnreviewDataChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot) { 
    this.getReviewData();
  }

  onSaveReviewData(aaa){
    return this.http.post('http://localhost:3000/api/reviews', aaa, ).toPromise();
  }

  getReviewData() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/reviews').subscribe((res: any) => {
        this.OnreviewDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
