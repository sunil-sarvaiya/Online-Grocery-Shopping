import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CategoryComponent } from 'src/app/front/catelog/category/category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product:any;
  constructor(private products:ProductsService){
    // console.log("userdata",products.products());
    

this.product=products.getProduct();    
  }
  ngOnInit() {
    window.scrollBy(0, 0);

  }

  
//   catArray:any=[
  
//     {category:'Fruit', name:'orange', quantity:500, price:2, img:'/assets/orange.jpeg'},
//     {category:'vagetable', name:'potato', quantity:500, price:2, img:'/assets/potato.jpeg'},
//     {category:'Fruit', name:'Strawberry', quantity:500, price:2, img:'/assets/straberry.jpeg'},
//     {category:'vagetable', name:'carrot', quantity:500, price:2, img:'/assets/carrot.png'},
//     {category:'Fruit', name:'apple', quantity:500, price:2, img:'/assets/apple.jpeg'},
//     {category:'vagetable', name:'tomato', quantity:500, price:2, img:'/assets/tomoto.jpg'},

 

// ];

}
