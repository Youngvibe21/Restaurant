import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SignupService} from './signup.service'
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  authResponse:any;
  showErr:boolean = false;
  constructor(private router: Router,private addUserService:SignupService, fb: FormBuilder ) { }
  signUpPayload = new FormGroup({
    userFirstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    userLastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    cnfPassword: new FormControl('',[Validators.required, Validators.minLength(3)]),
    acceptTerms: new FormControl('',[Validators.requiredTrue])

  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    if(this.signUpPayload.invalid){
      console.log("please Enter all details before Registration!");
      return;
    }else{
      if(data.value.password != data.value.cnfPassword){
        document.getElementById("showErr")!.innerHTML = "please enter same password";
        return;
      }
    
    this.addUserService.authenticateAndAddUser(data.value).subscribe((response:any)=>{
      console.log("Response AddUser authenticate ",response);
      this.authResponse = response.message;
      this.addUser(this.authResponse, data);
    });
   }
  }

  addUser(res:any, data: FormGroup){
    if(res=="No record found"){
      this.addUserService.addUser(data.value).subscribe((response:any)=>{
        console.log("Response Adduser ",response);
        if(response.message=="Registration succesfull"){
          this.router.navigate(['/login']);
        }
      })
    }else{
      alert("user Already Exist");
    }
  }

  ngOnInit(): void {
  }

}
