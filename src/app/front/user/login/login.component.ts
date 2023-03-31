import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FrontService } from 'src/app/shared/services/front.service';
import { compileNgModule } from '@angular/compiler';
import { UserModel } from 'src/app/model/user-model';
import { login } from 'src/app/model/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(){
  }

  constructor(private http:HttpClient , private router:Router, private user:FrontService){}

  
  loginForm = new FormGroup({

    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })

  
  get username(){
    return this.loginForm.get('username')
  };

  
  get password(){
    return this.loginForm.get('password')
  };

  
  login(){
    // console.log(data);

    //  this.user.login(data).subscribe(res=>{
    //   console.log(res);
    //  })
    const data=this.loginForm.getRawValue();
    console.log("data",data)
   
  let body={
    username:data.username,
    password:data.password,
  };
 console.log(body);
  
 this.user.login(body).subscribe((result)=>{
  console.log(result);
  alert("login");
  this.loginForm.reset();
  localStorage.setItem("username",JSON.stringify(body.username)) ;
  this.router.navigate(['/']);



 



  
 })
}}

    
//     this.http.get<any>("http://localhost:3000/usersignup").subscribe(res=>{
//       const user = res.find((a:any)=>{
//           return a.email === this.registrationForm.value.email && a.password === this.registrationForm.value.password
//       });console.log(user)
//       if(user){
//         alert('login success !!');
//         this.registrationForm.reset();

//         localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
//         // localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
//         this.router.navigate(['/']);
// }
//   });
