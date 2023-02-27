import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  type1:string="password";
  isText1:boolean=false;
  eyeIcon1:string="fa-eye-slash"

  signupForm!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      first_Name:['',Validators.required],
      last_Name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      confirm_Password:['',Validators.required],
      country:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      address:['',Validators.required],
      zip_Code:['',Validators.required],
      captcha_Code:['',Validators.required],
      check_Box:['',Validators.required]

    })
  }

  hideShowPass(){
    this.isText=!this.isText;
 this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
 this.isText?this.type="text":this.type="password";
  }

  hideShowPass1(){
    this.isText1=!this.isText1;
    this.isText1?this.eyeIcon1="fa-eye":this.eyeIcon1="fa-eye-slash";
    this.isText1?this.type1="text":this.type1="password"
  }

  private validateAllFormFileds(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }

    })
  }

  signup(){
    if(this.signupForm.valid)
    {
      console.log(this.signupForm.value)
    }
    else{
      this.validateAllFormFileds(this.signupForm)
    }
  }

}
