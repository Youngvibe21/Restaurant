import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userId: any;
  constructor( private router: Router,private loginService: LoginService, fb: FormBuilder) { }
  loginPayload = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  async onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    this.loginService.authenticateUser(data.value);
    //await this.showLoginFailed(res);
  }
  showResponse(res:any){
    if(res==false || res==undefined){
      console.warn("After eric")
      //this.showLoginFailed();
    }else{
      this.userId = res;
      this.router.navigate(['/itemPage']);
      
    }
  }
  showLoginFailed(res:any){
    console.warn("Before eric ",res);

    alert("Invalid UserName or Password");
  }
  ngOnInit(): void {
  }

}
