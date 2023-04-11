import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addProduct ,cart } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartItem: EventEmitter<addProduct[] | []> = new EventEmitter<
  addProduct[] | []
>();

  constructor( private http:HttpClient) { }

  // array = [
  //   {category:'Fruit', name:'orange', quantity:500,product_quantity:1, price:2, img:'/assets/orange.jpeg'},
  //   {category:'vagetable', name:'potato', quantity:500,product_quantity:1, price:2, img:'/assets/potato.jpeg'},
  //   {category:'Fruit', name:'Strawberry', quantity:500,product_quantity:1, price:2, img:'/assets/straberry.jpeg'},
  //   {category:'vagetable', name:'carrot', quantity:500, product_quantity:1,price:2, img:'/assets/carrot.png'},
  //   {category:'Fruit', name:'apple', quantity:500,product_quantity:1, price:2, img:'/assets/apple.jpeg'},
  //   {category:'vagetable', name:'tomato', quantity:500, product_quantity:1,price:2, img:'/assets/tomoto.jpg'},]


  // getProducts(){
    
  //   return this.array;

    
  // }


  getProduct() {
    return this.http.get('http://localhost:3000/products');
  }

  
  popularProducts() {
    return this.http.get<addProduct[]>(
      'http://localhost:3000/products?_limit=9'
    );
  }

  
  getProductId(id: string) {
    return this.http.get<addProduct>(`http://localhost:3000/products/${id}`);
  }

  
  addToCart(data:cart){
    return this.http.post('http://localhost:3000/cart',data)
  }

  
  getCartData(userId:number){
    return this.http.get<addProduct[]>('http://localhost:3000/cart?userId='+userId,{observe:'response'}).subscribe((res)=>{
      if(res && res.body){
        this.cartItem.emit(res.body)
      }
    })
  }

  
  GetCart(){
    // get the id of user
    let user = localStorage.getItem('user')
    let userId = user && JSON.parse(user)[0].id
    return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userId)
  }

  
  removeCart(cartID:number){
    return this.http.delete('http://localhost:3000/cart/'+cartID,{observe:'response'}).subscribe((res:any)=>{
      if(res && res.body){
        this.cartItem.emit(res.body)
      }
    })
  }

  
  updateCart(id:number,data:cart){
    return this.http.put("http://localhost:3000/cart/"+id,data)
   }


   
  addCartToLocalStorage(data: addProduct) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartItem.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartItem.emit(cartData);
  }

  removeCartToLocalStorage(id: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: addProduct[] = JSON.parse(cartData);
      items = items.filter((data: addProduct) => id !== data.id);
      console.log(items);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartItem.emit(items);
    }
  }

  getCart(){
     let cartData = localStorage.getItem('localCart')
     let cart:cart[] = cartData && JSON.parse(cartData)
     return cart
  }





}
