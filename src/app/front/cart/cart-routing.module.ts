import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [

{
  path:'',
  component:CartComponent
},
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'orderSuccess',
    component:OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
