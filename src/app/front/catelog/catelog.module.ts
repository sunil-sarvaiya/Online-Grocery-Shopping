import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogRoutingModule } from './catelog-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    CatelogRoutingModule,
    FormsModule
  ],
  exports:[ CategoryComponent]
})
export class CatelogModule { }
