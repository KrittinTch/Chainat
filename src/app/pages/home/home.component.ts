import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  images: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getImageData();
  }

  async getImageData(){
    this.images = await this.http.get('../../../assets/json/photoslide.json').toPromise();
    console.log(this.images);
  }
}
