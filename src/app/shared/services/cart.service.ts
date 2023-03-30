import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addToCart(data:any){
    return this.http.post<any>("http://localhost:3000/cart",data)
  }


  getToCart(){
    return this.http.get("http://localhost:3000/cart")
  }

  delToCart(id:any){
    return this.http.delete("http://localhost:3000/cart"+"/"+id)

  }

  updateCart(id:any,products:any){
    return this.http.put("http://localhost:3000/cart"+"/"+id,products)
  }
}
