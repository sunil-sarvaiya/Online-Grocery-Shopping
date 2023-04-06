import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let userData = localStorage.getItem('userToken')
    let token = userData
    console.log("tokenbdhcdhvhweh",token);
    

    if(token){
      let userToken= request.clone({
        setHeaders:{
          token:token
        }
      })
      return next.handle(userToken)
    }
    return next.handle(request);
  }
}
