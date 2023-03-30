import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  [x: string]: any;

// product:any;
  constructor(private activeRoute:ActivatedRoute,  private productService:ProductsService, private cartService:CartService){

  }
products:any=[]
name:any;
numberData=1;
index:any;
isAddToCart:boolean=false;


  ngOnInit() {
   this.name=this.activeRoute.snapshot.paramMap.get('name'); 


   this.products=  this.productService.getProducts();

   

    
    this.productData()
  }

  productData(){
    this.products = this.products.filter((product:any)=>product.name  == this.name)
    console.log("Product data",this.products);
    this.index = this.products;
    return this.products
    
  }

  // plusValue(){
  //   this.numberData++;
  // }

  // minusValue(){
  //   this.numberData--;
  // }




  submit(){
    if (this.index && this.index.length > 0) { // check if this.index is defined and has elements
      let data=this.index[0];

    this.cartService.addToCart(data).subscribe((result:any)=>{
      console.log("result",result);
      
    })
    this.isAddToCart=true;
  }

  }}
