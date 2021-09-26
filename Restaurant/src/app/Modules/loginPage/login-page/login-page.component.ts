import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userId: any;
  showErr: boolean=false;
  constructor( private router: Router,private loginService: LoginService, fb: FormBuilder) { }
  loginPayload = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  async onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    if(this.loginPayload.invalid){
      this.showErr = true;
      return;
    }
    this.loginService.authenticateUser(data.value).subscribe((response:any)=>{
      console.log("Response login ",response);
      if(response.message == "Record Found"){
        this.router.navigate(['/itemPage']);
      }else{
        alert("Invalid Credentials!")
      }
    });
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
