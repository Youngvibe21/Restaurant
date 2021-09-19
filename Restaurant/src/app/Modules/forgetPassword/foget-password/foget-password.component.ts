import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
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
    email: new FormControl('')
  });
  onClickSubmit(data: FormGroup){
    console.log("Email",data.value);
    let result = this.forgetService.getResetLink(data.value);
    if(result == "User Not Exist!"){
      alert(result);
    }else if(result == "Technical Error !"){
      alert(`${result} Sorry for the inconvenience`)
    }else{
      this.router.navigate(['/newPass']);
    }
  }
  
  ngOnInit(): void {
  }

}
