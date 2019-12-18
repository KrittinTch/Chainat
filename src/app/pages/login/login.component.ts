import { AuthService } from 'ng6-md-auth';
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  
  data: any = {};
  massage: any = "";
  dataMaster = {
    username: "admin",
    password: "1234"
  };
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  onSignIn(){
    console.log(this.data);
    if(this.data.username === this.dataMaster.username){
      if(this.data.password === this.dataMaster.password){
        this.router.navigate(["/admin"]);
      } else {
        this.massage = "Password ผิดพลาด"
      }
    } else {
      this.massage = "User ผิดพลาด"
    }
  }
}
