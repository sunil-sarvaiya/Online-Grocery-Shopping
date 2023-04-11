import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { addProduct,Address } from 'src/app/model/user-model';
import { CartService } from 'src/app/shared/services/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

addressData:any=[];
addressEncryption!:string;
orderStatus = ""
paymentStatus = ""

constructor(
      private user:UsersService,
      private Encryption:EncryptionService,
      private Cart:CartService,
      private Order:OrderService,
      
      ){}

  ngOnInit() {
    this.userData()
  }




userData(){
  this.user.userDetails().subscribe((res)=>{
    console.log(res);
    this.addressData=res.data.addresses;
    // this.sunil=this.addressData[0].city;
    console.log(this.addressData);
  })
}

getAddressId(id:any){
  console.log("id",id);
  this.encryption(id);
  setTimeout(() => {
    this.submit()
  }, 1000);
}


encryption(id:any){
  this.Encryption.encryptionFunction(id.toString()).subscribe((res:any)=>{
    console.log("encryption response Address ...", res.data);
    this.addressEncryption = res.data
  })
}



submit(){
  let data = this.Cart.getCartData();
  console.log(data);

  this.Order.addOrder(data,this.addressEncryption,this.addressEncryption,this.paymentStatus,this.orderStatus).subscribe((res:any)=>{
    console.log("order response...", res);
    // this.toast.success(res.message)
  }, err=>{
    console.log(err);
    // this.toast.error(err.error.message)
  })
}


}
