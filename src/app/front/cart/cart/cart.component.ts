import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { addProduct,cart } from 'src/app/model/user-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  // constructor(private cartService:CartService){
  //   this.getCartData();
  // }
  // numberData=1;

  // cartData:any;

  // getCartData(){
  //   this.cartService.getToCart().subscribe((response)=>{
  //     this.cartData=response;
  //   })
  // }



  // delCartData(id:any){
  //   this.cartService.delToCart(id).subscribe((data)=>{

  //   })
  //   this.getCartData()
  // }


  // products:any=[];
  // addQuantity(Id: any,i:any) {
  //   this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
  //     if (item.id === Id) {
  //       item.product_quantity++;
  //       // console.log(item.product_quan)
  //       // console.log(this.cartData)
        
      
  //         console.log(this.cartData[i].product_quantity,"quant")
  //         this.products=this.cartData[i]
  //       this.products.product_quantity=item.product_quantity
          
  //       this.updateCartData(Id,this.products)
          
  //     }
  //   });


    
  // }
  // subQuantity(Id: any,i:any) {
  //   this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
  //     if (item.id === Id) {
  //       if (item.product_quantity > 0){
  //       item.product_quantity--;
  //       this.products=this.cartData[i]
  //       this.products.product_quantity=item.product_quantity
          
  //       this.updateCartData(Id,this.products)

  //     }
  //   }
  //   });
  // }

  // updateCartData(id:any,products:any){
  //   this.cartService.updateCart(id,products).subscribe((res)=>{
  //     console.log(res)
  //   })
  // }
  // total(){
  //   const total=this.cartData.reduce((total:any, item:any) => total + item.product_quantity * item.price, 0)
  //   return total;
  //   }

  
  // // plusValue(){
  // //   this.numberData++;
  // // }

  // // minusValue(){
  // //   this.numberData--;
  // // }





    //#region
    cartData!:any;
    productQuantity!:number;
    totalPrice:any;
    subtotal!:number;
    text!:number;
    discount!:number;
    delivery!:number;
    dispalyEmplty = true
    displayTotal:EventEmitter<any> = new EventEmitter<any>()

  constructor(private product: ProductsService, private cart:CartService) {}

  ngOnInit(){

    this.getCartData();
    
    window.scroll(0,0)

   
  }


  
  getCartData() {
    this.cartData = this.cart.getCartData();
    let amount = 0

      this.cartData.forEach((item:any)=>{
        if(item.quantity){
          amount = amount + (item.amount * item.quantity)
        }
      })
      this.subtotal = amount;
      if(this.subtotal){
        this.dispalyEmplty = false
      }
      else{
        this.dispalyEmplty = true
      }
      this.text = ((amount*18)/100);
      this.discount = ((amount*10)/100);
      this.delivery = 100;
      this.totalPrice = amount + ((amount*18)/100) + ((amount*10)/100) + 100;
      this.displayTotal.emit(this.totalPrice)
    };


    quantity(data: string,product:addProduct) {
      if(product.quantity){
        this.productQuantity = product.quantity
      }
      if (data === 'min' && this.productQuantity > 1) {
        this.productQuantity -= 1;
        if(product){
          product.quantity = this.productQuantity
          this.cart.addItemToCart(product)
          this.getCartData();
        }
      }
      if (data === 'pluse' && this.productQuantity < 50) {
        this.productQuantity += 1;
        if(product){
          product.quantity = this.productQuantity
          this.cart.addItemToCart(product)
          this.getCartData();
        }
      }
    }

    removeItem(product:addProduct){
      this.cart.removeItemToCart(product);
      this.getCartData();
    }



  


}
