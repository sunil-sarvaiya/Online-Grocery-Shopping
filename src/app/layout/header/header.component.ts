import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
showName:any=true;
btnText:string="Log in";
userLoggedIn:boolean=false
constructor(private router :Router){
  let data = localStorage.getItem('username');
  if(data){
    this.btnText=JSON.parse(data);
    this.userLoggedIn=true
    this.navigate()

    
  }

}
  loadData(): any {
    return localStorage.getItem('username');
  }

navigate(){
if(this.userLoggedIn){
this.router.navigate(['/front/user/profile']) 
}else{
  this.router.navigate(['/front/user/login'])
}
}
}
