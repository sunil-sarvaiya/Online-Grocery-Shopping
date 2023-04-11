import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  baseURL=environment.base;
  encryption=environment.encryption;

  constructor(private http:HttpClient , private router:Router) { }

  encryptionFunction(data:any){
    return this.http.get<any>(this.baseURL+this.encryption,

    {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'skip-browser-warning',
        'Access-Control-Allow-Origin': '*',
        'id': data,
      }),
    }
    )
}
}
