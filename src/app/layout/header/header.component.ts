import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/shared/services/front.service';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
name:any | null;
showName:any=true;
ifUser = false;
btnText:string="Log in";
userLoggedIn:boolean=false;
cartItems = 0;

constructor(private router :Router, private user:FrontService, private cart:CartService){
  let data = localStorage.getItem('username');
  if(data){
    this.btnText=JSON.parse(data);
    this.userLoggedIn=true
    // this.navigate()

    
  }

}


  ngOnInit() {
    this.checkUser()

this.getCartItemLength();


   let user = localStorage.getItem('username')
   let userData = user && JSON.parse(user)
   this.name = userData
  }
  loadData(): any {
    return localStorage.getItem('username');
  }

// navigate(){
// if(this.userLoggedIn){
// this.router.navigate(['/front/user/profile']) 
// }else{
//   this.router.navigate(['/front/user/login'])
// }
// }

checkUser(){
  const token = localStorage.getItem('userToken')

  if(token){
    this.ifUser=true;
  }
  else{
    this.ifUser=false;
  }
}

logout(){
  this.user.logout()
}


getCartItemLength(){
  let cartData=localStorage.getItem('localCart');
  if(cartData){
    this.cartItems = JSON.parse(cartData).length;
  }

  this.cart.getCartLength.subscribe((res)=>{
    this.cartItems=res.length
  })



}

}
