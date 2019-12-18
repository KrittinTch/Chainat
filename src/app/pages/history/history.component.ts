import { HistoryService } from './history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historydata: any;

  constructor(public historyservice: HistoryService) { }

  ngOnInit() {
    this.historyservice.OnHistoryDataChanged.subscribe((res: any) => {
      this.historydata = res;
      console.log(this.historydata)
    })
  }

}
