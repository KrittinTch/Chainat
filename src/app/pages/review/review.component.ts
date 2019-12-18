import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalAddreviewComponent } from '../modal-addreview/modal-addreview.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewdata: any;

  constructor(public dialog: MatDialog,
    private reviewService: ReviewService,) { }

  ngOnInit() {
    this.reviewService.OnreviewDataChanged.subscribe((res: any) => {
      this.reviewdata = res;
      console.log(this.reviewdata)
    })
  }

  addreview(): void {
    const dialogRef = this.dialog.open(ModalAddreviewComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const aaa = result;
      console.log(aaa);
      this.reviewService.onSaveReviewData(aaa);
    });
  }

}



