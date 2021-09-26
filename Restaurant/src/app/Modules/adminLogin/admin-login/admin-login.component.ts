import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminLoginService} from './admin-login.service'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminId:any;
  constructor(private router: Router,private loginService:AdminLoginService, fb: FormBuilder) { }
  loginRestPayload = new FormGroup({
    restaurant: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    let result = this.loginService.authenticateAdmin(data.value).subscribe((response)=>{
      console.log("Response Admin login ",response)
    });
    // if(result){
    //   this.adminId = result;
    //   this.router.navigate(['/adminItem']);
    // }else{
    //   alert("Authentication failed !");
    // }
  }
  ngOnInit(): void {
  }

}
