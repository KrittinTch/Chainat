import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-addreview',
  templateUrl: './modal-addreview.component.html',
  styleUrls: ['./modal-addreview.component.scss']
})
export class ModalAddreviewComponent implements OnInit {

  datareview: any={};

  constructor( public dialogRef: MatDialogRef<ModalAddreviewComponent>) { }

  ngOnInit() {
  }

  onOk(){
    // console.log(this.datareview);
  
      this.dialogRef.close(this.datareview);
    
  }



}
