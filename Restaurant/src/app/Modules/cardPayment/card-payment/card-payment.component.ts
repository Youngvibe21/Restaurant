import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {
  data:any;
  // payForm: any;
  constructor(private router:Router, fb: FormBuilder) {   
    let nav = this.router.getCurrentNavigation();
    this.data = nav?.extras.state?.payload;
    console.log("this dqata",this.data)
  }
  payForm = new FormGroup({
    cardname: new FormControl('',[Validators.required]),
    cardnumber: new FormControl('',[Validators.required]),
    expmonth: new FormControl('',[Validators.required]),
    expyear: new FormControl('',[Validators.required]),
    cvv: new FormControl('',[Validators.required]),
  });
  ngOnInit(): void {
    
  }
  submit(){
    if(this.payForm.invalid){
      alert("please fill all details!");
    }else{
      alert("your Order placed successfully");
      this.router.navigate(['/itemPage'])
    }
    
  }
}
