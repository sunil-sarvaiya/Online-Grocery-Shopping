import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/model/user-model';
import { login } from 'src/app/model/login';
@Injectable({
  providedIn: 'root'
})
export class FrontService {

  // baseUrl=environment.baseUrl;
  // regiStration=environment.registration;
  baseURL = environment.base;
  registerUrl = environment.register;
  loginUrl= environment.login;
  constructor(private http:HttpClient) { }

  registration(data:UserModel){

    return this.http.post(this.baseURL+this.registerUrl,data)

  }

  // login(data:any){
  //   return this.http.get<any>(`http://localhost:3000/registration?email=${data.email}&passwod=${data.password}`,data)
  // }

  login(data:login){
    return this.http.post(this.baseURL+this.loginUrl,data)
  }
}
