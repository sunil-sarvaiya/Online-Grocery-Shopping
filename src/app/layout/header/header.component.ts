import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/shared/services/front.service';


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
userLoggedIn:boolean=false
constructor(private router :Router, private user:FrontService){
  let data = localStorage.getItem('username');
  if(data){
    this.btnText=JSON.parse(data);
    this.userLoggedIn=true
    // this.navigate()

    
  }

}


  ngOnInit() {
    this.checkUser()




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

}
