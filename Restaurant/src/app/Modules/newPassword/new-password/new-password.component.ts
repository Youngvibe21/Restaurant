import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NewPassService} from './newPass.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  email:any;
  passErr:boolean=false;
  constructor(private router: Router,private newPassService: NewPassService, fb: FormBuilder) {
    let nav = this.router.getCurrentNavigation();
    console.log(nav);
    this.email = nav?.extras.state?.email;
    console.log("email",this.email);
   }
  newPass = new FormGroup({
    newPass: new FormControl('',[Validators.required]),
    cnfNewPass: new FormControl('',[Validators.required]),
  });
  onClickSubmit(data: FormGroup){
    if(this.newPass.invalid){
      alert("please enter password details!");
      return;
    }else{
      if(data.value.newPass != data.value.cnfNewPass){
        console.log("Required same password in both field!");
        this.passErr = true;
        return;
      }
      this.passErr = false;
      let credObj ={
        email: this.email,
        pasword: data.value.newPass
      }
      this.newPassService.updateUserDetails(credObj).subscribe((response:any)=>{
        console.log("update creds response ", response);
        if(response.message == "User not exist!"){
          this.passErr = true;
          setTimeout(() => {
            document.getElementById("newPassErr")!.innerHTML = "Tecnical Error Please go back and Retry";
          }, 500);
          return;
        }
        this.router.navigate(['/login']);
      })
      //
    }
  }
  ngOnInit(): void {
  }

}
