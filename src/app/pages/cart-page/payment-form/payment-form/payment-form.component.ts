import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor(private cs:CartService) { }
  paymentForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.paymentForm=new FormGroup({
      name:new FormControl("", [Validators.required,Validators.pattern(/^[A-ZŠĐČĆŽa-zšđčćž ,.'-]{2,35}$/)]),
      cnumber:new FormControl("", [Validators.required,Validators.pattern(/^\d{4}(?:\s?\d{4}){3}$/)]),
      expiry:new FormControl("", [Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]),
      cvc:new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]),
    })
  }
  get f(){return this.paymentForm.controls;}
  onSubmit(){
    this.submitted=true;
    console.log(this.paymentForm)
    this.paymentForm.reset();
  }

}
