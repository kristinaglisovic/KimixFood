import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  contactForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {

    this.contactForm=new FormGroup({
      name:new FormControl("", [Validators.required,Validators.pattern(/^[A-ZŠĐČĆŽa-zšđčćž ,.'-]{2,35}$/)]),
      email:new FormControl("", [Validators.required,Validators.email]),
      subject:new FormControl("", [Validators.required,Validators.pattern(/^[a-zšđčćžA-ZŠĐČĆŽ\s\d]{2,30}$/)]),
      message:new FormControl("", [Validators.required, Validators.pattern(/^[a-zšđčćžA-ZŠĐČĆŽ\s\d.,!?]*$/)]),
   });
  }
  get f(){return this.contactForm.controls;}
  onSubmit(){
    this.submitted=true;
    console.log(this.contactForm)
    this.contactForm.reset();
  }

  // noSpaceAllowed(control:FormControl){
  //   if(control.value!=null && control.value.indexOf('')!=-1){
  //     return{noSpaceAllowed:true}
  //   }
  //    return null;
  // }
 

}
