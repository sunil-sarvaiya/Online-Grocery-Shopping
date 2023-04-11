import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  baseURL=environment.base;
  add_order = environment.addOrder;


  
  addOrder(data:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any){
    try {
      return this.http.post<any>(this.baseURL + this.add_order, data, {
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'skip-browser-warning',
          'Access-Control-Allow-Origin': '*',
          billing_address_id: billing_address_id,
          delivery_address_id: delivery_address_id,
          payment_status: payment_status,
          order_status: order_status,
        }),
      });
    } catch (error: any) {
      return throwError(() => new Error(error));
    }
  }

}
