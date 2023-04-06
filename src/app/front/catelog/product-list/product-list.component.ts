import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  
  catArray:any=[
  
    {category:'Fruit', name:'orange', quantity:500, price:2, img:'/assets/orange.jpeg'},
    {category:'vagetable', name:'potato', quantity:500, price:2, img:'/assets/potato.jpeg'},
    {category:'Fruit', name:'Strawberry', quantity:500, price:2, img:'/assets/straberry.jpeg'},
    {category:'vagetable', name:'carrot', quantity:500, price:2, img:'/assets/carrot.png'},
    {category:'Fruit', name:'apple', quantity:500, price:2, img:'/assets/apple.jpeg'},
    {category:'vagetable', name:'tomato', quantity:500, price:2, img:'/assets/tomoto.jpg'},

    

    


];

filter = this.catArray;

forFilter(category: string) {
  this. filter = this.catArray.filter((catArray: { category: string; }) => catArray.category == category);
}

}



