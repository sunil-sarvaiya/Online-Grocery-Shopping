import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { ManageAddressesComponent } from './manage-addresses/manage-addresses.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    children: [
      { 
        path: 'login',
        component: LoginComponent 
      },

      { 
        path: 'registration', 
        component: RegistrationComponent 
      },

      { 
        path:'profile' , 
        component:ProfileComponent,
        canActivate:[AuthGuard]
      },

      {
        path:'orders', 
        component:OrdersComponent,
        canActivate:[AuthGuard]

        
      },
      
      {
        path:'manage-addresses', 
        component:ManageAddressesComponent
      },

      {
        path:'change-password', 
        component:ChangePasswordComponent
      }
    
      // { path: 'profile', component: ProfileComponent },
      // {path:'order',component:OrdersComponent},
        // { path: '**', component: HomeComponent }

    ],
  
  },
  // {
  //   path:"",
  //  component:LoginComponent
  // },
  // {
  //   path:'login',
  //  component:LoginComponent
  // },
  // {
  //   path:"registration",
  //  component:RegistrationComponent
  // },
  // {
  //   path:"use-profile",
  //  component:UserProfileComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
