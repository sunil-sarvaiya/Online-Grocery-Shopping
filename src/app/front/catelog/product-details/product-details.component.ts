import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { addProduct,cart } from 'src/app/model/user-model';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { NewProductService } from 'src/app/shared/services/new-product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
// export class ProductDetailsComponent implements OnInit{
//   [x: string]: any;

// // product:any;
//   constructor(private activeRoute:ActivatedRoute,  private productService:ProductsService, private cartService:CartService){

//   }
// products:any=[]
// name:any;
// numberData=1;
// index:any;
// isAddToCart:boolean=false;


//   ngOnInit() {
//    this.name=this.activeRoute.snapshot.paramMap.get('name'); 


//    this.products=  this.productService.getProducts();

   

    
//     this.productData()
//   }

//   productData(){
//     this.products = this.products.filter((product:any)=>product.name  == this.name)
//     console.log("Product data",this.products);
//     this.index = this.products;
//     return this.products
    
//   }

//   // plusValue(){
//   //   this.numberData++;
//   // }

//   // minusValue(){
//   //   this.numberData--;
//   // }




//   submit(){
//     if (this.index && this.index.length > 0) { // check if this.index is defined and has elements
//       let data=this.index[0];

//     this.cartService.addToCart(data).subscribe((result:any)=>{
//       console.log("result",result);
      
//     })
//     this.isAddToCart=true;
//   }

//   }}





export class ProductDetailsComponent implements OnInit{


 //#region
 productData: any | undefined;
 productName!: string | null;
 productQuantity: number = 1;
 removeCart: boolean = false;
 cuurentCartItem!:addProduct;
 productId!:any


 constructor(
      private Encryption:EncryptionService,
      private activerouter:ActivatedRoute,
      private product:ProductsService,
      private newproduct:NewProductService,
      private cart:CartService,
      private toast:ToastrService
 ){}

 ngOnInit() {
  // this.getDetails();
  window.scrollBy(0,0)

  this.activerouter.paramMap.subscribe((params) => {
    this.productId = params.get('productId');
    console.log(" this.productId:", this.productId)
  });
  this.encryption(this.productId);
}


getDetails() {
  let productId = this.activerouter.snapshot.paramMap.get('productId');
  productId &&
    this.product.getProductId(productId).subscribe((res) => {
      this.productData = res;
      this.productName = this.productData.pName;
      console.log(this.productData);
    });

    let cartData = localStorage.getItem('localCart')
    if(cartData && productId){
    let item = JSON.parse(cartData);
    item = item.filter((data:addProduct)=> data.id.toString() === productId)
    if(item.length){
      this.removeCart = true
    }
    else{
      this.removeCart = false
    }
  }

  
  let user =  localStorage.getItem('user')
  if(user){
   let userId = user && JSON.parse(user)[0].id
   this.product.getCartData(userId)
   this.product.cartItem.subscribe((res)=>{
    let items = res.filter((item:addProduct)=> productId==item.productId?.toString())
    if(items.length){
        this.cuurentCartItem = items[0]
      this.removeCart = true
    }
    else{
      this.removeCart =false
    }
   })    
  }
}


quantity(data: string) {
  if (data === 'min' && this.productQuantity > 1) {
    this.productQuantity -= 1;
  }
  if (data === 'pluse' && this.productQuantity < 20) {
    this.productQuantity += 1;
  }
}

addToCart(data:any) {
  if(this.productData){
    this.productData.quantity = this.productQuantity
  }
 this.cart.addItemToCart(data);
 this.toast.success("item is Added!!")
 this.removeCart = true;
}

removeToCart(data:any){
 this.cart.removeItemToCart(data);
 this.toast.success("item is Removed!!")
 this.removeCart = false;
}

encryption(id:number){
  // this.encryption.encryptionFunction(id).subscribe((res:any)=>{
    this.Encryption.encryptionFunction(id).subscribe((res)=>{
    console.log("Encryption response :",res.data);
    this.newproduct.getProductById(res.data).subscribe((res:any)=>{
      console.log("product by id : ", res.data);
      this.productData = res.data
      this.productName = res.data.title
    })
  })
}

}
