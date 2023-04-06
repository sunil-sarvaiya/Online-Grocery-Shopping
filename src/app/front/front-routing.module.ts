import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart/cart.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  
  // {path:'',redirectTo:'home',pathMatch:'full'},  
  // {path:'home',component:HomeComponent},  
  // {path:'cart',component:CartComponent},
  
    
    {
      path:'cart',
      loadChildren:()=>import("./cart/cart.module").then((l)=>l.CartModule),
      canActivate:[AuthGuard]
    },
  

  {
    path:'catelog',
    loadChildren:()=>import("./catelog/catelog.module").then((l)=>l.CatelogModule)
  },
  
  {
    path:'user',
    loadChildren:()=>import("./user/user.module").then((j)=>j.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
