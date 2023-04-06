import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/model/user-model';
import { login } from 'src/app/model/login';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FrontService {
  [x: string]: any;

  // baseUrl=environment.baseUrl;
  // regiStration=environment.registration;
  baseURL = environment.base;
  registerUrl = environment.register;
  loginUrl= environment.login;
  changePasswordUrl= environment.changePassword;
  constructor(private http:HttpClient , private router:Router) { }

  registration(data:UserModel){

    return this.http.post(this.baseURL+this.registerUrl,data)

  }

  // login(data:any){
  //   return this.http.get<any>(`http://localhost:3000/registration?email=${data.email}&passwod=${data.password}`,data)
  // }

  login(data:login){
    return this.http.post(this.baseURL+this.loginUrl,data)
  }

  
  changePassword(data:any){
    return this.http.put("https://a521-117-217-127-105.in.ngrok.io/api/v1/customer/changePassword",data)
  }


  logout(){
    localStorage.clear()
    this.router.navigate(['']);

  }
}


