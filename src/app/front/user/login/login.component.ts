import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FrontService } from 'src/app/shared/services/front.service';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(){
  }

  constructor(private http:HttpClient , private router:Router, private user:FrontService){}

  
  registrationForm = new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })

  
  get email(){
    return this.registrationForm.get('email')
  };

  
  get password(){
    return this.registrationForm.get('password')
  };

  
  login(data:any){
    console.log(data);

     this.user.login(data).subscribe(res=>{
      console.log(res);
     })

    
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

  }}