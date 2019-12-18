import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(public http: HttpClient) { }

  onSaveReviewData(){
    this.http.get('http://localhost:3000/api/reviews')
  }
}
