import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { CatelogModule } from './catelog/catelog.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CatelogModule
  ]
})
export class FrontModule { }
