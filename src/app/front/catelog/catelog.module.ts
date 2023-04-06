import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogRoutingModule } from './catelog-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CatelogRoutingModule
  ],
  exports:[ CategoryComponent]
})
export class CatelogModule { }
