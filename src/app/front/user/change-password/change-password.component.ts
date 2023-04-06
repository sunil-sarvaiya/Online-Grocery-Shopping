import { Component, OnInit } from '@angular/core';
import { FrontService } from 'src/app/shared/services/front.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{

  
  ngOnInit() {

  }
  constructor(private http:HttpClient, private changePassword:FrontService){

  }



  
  form = new FormGroup({
    oldPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    // confirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })

  
  get oldPassword(){
    return this.form.get('oldPassword')
  };
  
  get newPassword(){
    return this.form.get('newPassword')
  };

  
  // get confirmPassword(){
  //   return this.form.get('confirmPassword')
  // };


  submit(){

    this.changePassword.changePassword(this.form.value).subscribe((res)=>{
       console.log(res);

      

      
      

    })

 
    // const data = this.form.getRawValue;

  // let body={
  //   oldPassword :  this.form.get('currentPassword') , 
  //   newPassword :  this.form.get('confirmPassword'),

//   // }  
//   console.log(body);
       
  
//   this.changePassword.changePassword(body).subscribe((res)=>{
//     console.log(res);
    
//   },(error:any)=>{
// console.log(error);

//   })
//   }

  }


}