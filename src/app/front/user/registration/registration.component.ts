import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FrontService } from 'src/app/shared/services/front.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted =false;
  registrationForm!:FormGroup;
  ngOnInit() {
    this.registrationForm = new FormGroup({

      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      username: new FormControl('',[Validators.required])
  
    })

  }
  constructor(private front:FrontService,  private http : HttpClient, private router:Router ) { }


  


 

  get fname(){
    return this.registrationForm.get('fname')
  };

  get lname(){
    return this.registrationForm.get('lname')
  };

  get email(){
    return this.registrationForm.get('email')
  };
  get phone(){
    return this.registrationForm.get('phone')
  };

  get password(){
    return this.registrationForm.get('password')
  };

  
  get username(){
    return this.registrationForm.get('username')
  };

  submit(){
    debugger
   
   let {
    fname,
    lname,
    email,
    username,
    password,
    phone,
  } = this.registrationForm.getRawValue();
  
  const data:UserModel={
    first_name:fname,
    last_name: lname,
    primary_email:email,  
    primary_mobile_number:  phone, 
    username:username,
    password:password,
  };

    this.front.registration(data).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/front/user/login']);

    })







    
  };



}
