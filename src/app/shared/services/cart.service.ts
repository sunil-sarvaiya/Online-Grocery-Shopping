import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addProduct } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor(private http:HttpClient) { }

  // addToCart(data:any){
  //   return this.http.post<any>("http://localhost:3000/cart",data)
  // }


  // getToCart(){
  //   return this.http.get("http://localhost:3000/cart")
  // }

  // delToCart(id:any){
  //   return this.http.delete("http://localhost:3000/cart"+"/"+id)

  // }

  // updateCart(id:any,products:any){
  //   return this.http.put("http://localhost:3000/cart"+"/"+id,products)
  // }



 //#region 
 getCartLength:EventEmitter<addProduct[]> = new EventEmitter<addProduct[]>

  constructor(){

  }


  getCartData(){
    let cartdata = localStorage.getItem('localCart')
    let localCart = cartdata && JSON.parse(cartdata);
    return localCart || [];
  }


  
  addItemToCart(item:any){
    let cart = this.getCartData();
    let currentProduct = cart.find((product:any) => product.id === item.id);
    if(currentProduct){
      currentProduct.quantity = item.quantity
    }
    else{
      cart.push(item)
    }
    // console.log(cart);
    localStorage.setItem('localCart',JSON.stringify(cart));
    this.getCartLength.emit(cart)
  }


  
  removeItemToCart(item:any){
    let cart = this.getCartData();
    let indexOfItem = cart.findIndex((product:any) => product.id === item.id);
    if(indexOfItem != -1){
      cart.splice(indexOfItem,1)
    }
    localStorage.setItem('localCart',JSON.stringify(cart)) 
    this.getCartLength.emit(cart)
  }



}
