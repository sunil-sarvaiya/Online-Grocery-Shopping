import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AboutUsComponent } from './shared/component/about-us/about-us.component';
import { ContactUsComponent } from './shared/component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'front',
    loadChildren:()=>import("./front/front.module").then((l)=>l.FrontModule)
  },

  {
    path:'about-us',
    component:AboutUsComponent
  },

  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
  path:'**',
  component:PageNotFoundComponent

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
