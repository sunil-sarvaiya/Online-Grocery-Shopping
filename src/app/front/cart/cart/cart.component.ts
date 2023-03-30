import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private cartService:CartService){
    this.getCartData();
  }
  numberData=1;

  cartData:any;

  getCartData(){
    this.cartService.getToCart().subscribe((response)=>{
      this.cartData=response;
    })
  }



  delCartData(id:any){
    this.cartService.delToCart(id).subscribe((data)=>{

    })
    this.getCartData()
  }


  products:any=[];
  addQuantity(Id: any,i:any) {
    this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
      if (item.id === Id) {
        item.product_quantity++;
        // console.log(item.product_quan)
        // console.log(this.cartData)
        
      
          console.log(this.cartData[i].product_quantity,"quant")
          this.products=this.cartData[i]
        this.products.product_quantity=item.product_quantity
          
        this.updateCartData(Id,this.products)
          
      }
    });


    
  }
  subQuantity(Id: any,i:any) {
    this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
      if (item.id === Id) {
        if (item.product_quantity > 0){
        item.product_quantity--;
        this.products=this.cartData[i]
        this.products.product_quantity=item.product_quantity
          
        this.updateCartData(Id,this.products)

      }
    }
    });
  }

  updateCartData(id:any,products:any){
    this.cartService.updateCart(id,products).subscribe((res)=>{
      console.log(res)
    })
  }
  total(){
    const total=this.cartData.reduce((total:any, item:any) => total + item.product_quantity * item.price, 0)
    return total;
    }

  
  // plusValue(){
  //   this.numberData++;
  // }

  // minusValue(){
  //   this.numberData--;
  // }

}
