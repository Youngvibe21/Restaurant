import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ForgetService} from './forget.service'

@Component({
  selector: 'app-foget-password',
  templateUrl: './foget-password.component.html',
  styleUrls: ['./foget-password.component.scss']
})
export class FogetPasswordComponent implements OnInit {

  constructor( private router: Router,private forgetService:ForgetService, fb: FormBuilder) { }
  resetPass = new FormGroup({
    email: new FormControl('',[Validators.required])
  });
  onClickSubmit(data: FormGroup){
    console.log("Email",data.value);
    if(this.resetPass.invalid){
      alert("Please enter an email");
      return;
    }
    this.forgetService.getResetLink(data.value).subscribe((response:any)=>{
      console.log("Response ForgetPassword ",response);
      if(response.message == "Record Found"){
        this.sendMail(data);
      }
    });
    // if(result == "User Not Exist!"){
    //   alert(result);
    // }else if(result == "Technical Error !"){
    //   alert(`${result} Sorry for the inconvenience`)
    // }else{
    //   this.router.navigate(['/newPass']);
    // }
  }
  sendMail(data:FormGroup){
    this.forgetService.sendLink(data.value).subscribe((response:any)=>{
      console.log("Response send mail",response);
      if(response.data.sent){
        this.router.navigate(['/newPass'], { state: { email: data.value.email } })
      }
    })
  }
  ngOnInit(): void {
  }

}
