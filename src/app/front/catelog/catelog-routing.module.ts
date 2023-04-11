import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // {path:'',redirectTo:'category',pathMatch:'full'},  
  // // {path:'home',component:HomeComponent}, 
  {
    path: '',
    children: [
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'product-list',
        component:ProductListComponent
      },
      {
        path:'product-details/:productId',
        component:ProductDetailsComponent
      },
      {
        path:'product-list/:name',
        component:ProductListComponent
      },
      // { path: 'profile', component: ProfileComponent },
      // {path:'order',component:OrdersComponent},
        { path: '**', component: HomeComponent }

    ],
  
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatelogRoutingModule { }
