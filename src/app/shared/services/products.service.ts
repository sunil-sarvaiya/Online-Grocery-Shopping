import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  array = [
    {category:'Fruit', name:'orange', quantity:500,product_quantity:1, price:2, img:'/assets/orange.jpeg'},
    {category:'vagetable', name:'potato', quantity:500,product_quantity:1, price:2, img:'/assets/potato.jpeg'},
    {category:'Fruit', name:'Strawberry', quantity:500,product_quantity:1, price:2, img:'/assets/straberry.jpeg'},
    {category:'vagetable', name:'carrot', quantity:500, product_quantity:1,price:2, img:'/assets/carrot.png'},
    {category:'Fruit', name:'apple', quantity:500,product_quantity:1, price:2, img:'/assets/apple.jpeg'},
    {category:'vagetable', name:'tomato', quantity:500, product_quantity:1,price:2, img:'/assets/tomoto.jpg'},]


  getProducts(){
    
    return this.array;

    
  }
}
