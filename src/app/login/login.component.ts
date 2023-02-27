import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  hideShowPass()
  {
 this.isText=!this.isText;
 this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
 this.isText?this.type="text":this.type="password";

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

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      // //send the obj to database
      // this.auth.Login(this.loginForm.value).subscribe({
      //  next:(res)=>{
      //    console.log(res.message);
      //    this.loginForm.reset();
      //    alert(res.message);
      //    this.router.navigate(['dashboard'])
      //  },
      //  error:(err)=>{
      //    alert(err?.error.message)
      //  },
      // });
    }
    else{

     this.validateAllFormFileds(this.loginForm)

   }


   }


}
