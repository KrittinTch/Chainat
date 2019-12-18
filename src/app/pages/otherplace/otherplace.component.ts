import { Component, OnInit } from '@angular/core';
import { OtherplaceService } from './otherplace.service';

@Component({
  selector: 'app-otherplace',
  templateUrl: './otherplace.component.html',
  styleUrls: ['./otherplace.component.scss']
})
export class OtherplaceComponent implements OnInit {
  otherplace: any;

  constructor(public otherplaceservice: OtherplaceService) { }

  ngOnInit() {
    this.otherplaceservice.OnotherplaceDataChanged.subscribe((res: any) => {
      this.otherplace = res[0];
      console.log(this.otherplace)
    })
  }


}
