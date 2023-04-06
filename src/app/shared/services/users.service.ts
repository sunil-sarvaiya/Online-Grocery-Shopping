import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';




@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = environment.base;
  userDetail=environment.userDetails;
  addressURL = environment.address;
  updateUser = environment.updateUser


  constructor(private http:HttpClient , private router:Router) { }

  userDetails(){

    return this.http.get<any>(this.baseURL+this.userDetail, {headers:new HttpHeaders({'ngrok-skip-browser-warning':'skip-browser-warning','Access-Control-Allow-Origin':'*'})})

  }

  addAddress(data:any){
    return this.http.post<any>(this.baseURL + this.addressURL ,data)

  }

  updateUserDetails(data:any){
    return this.http.put<any>(this.baseURL + this.updateUser,data ,{headers:new HttpHeaders({'ngrok-skip-browser-warning':'skip-browser-warning','Access-Control-Allow-Origin':'*'})})
  }

  
}
