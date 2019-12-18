import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  status: Boolean = false;
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.data = params
    });
    this.status = this.data.params.status
    this.checkStatus();
  }

  checkStatus() {
    if (this.status === false) {
      this.router.navigate(["/login"]);
    } else {
      console.log('this page');
    }
  }
  logOut() {
    this.status = false
    this.checkStatus();
  }

}
