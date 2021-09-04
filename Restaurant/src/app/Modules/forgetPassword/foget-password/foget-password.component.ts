import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foget-password',
  templateUrl: './foget-password.component.html',
  styleUrls: ['./foget-password.component.scss']
})
export class FogetPasswordComponent implements OnInit {

  constructor( private router: Router, fb: FormBuilder) { }
  resetPass = new FormGroup({
    email: new FormControl('')
  });
  onClickSubmit(data: FormGroup){
    console.log("Email",data.value.email);
    this.router.navigate(['/newPass']);
  }
  
  ngOnInit(): void {
  }

}
