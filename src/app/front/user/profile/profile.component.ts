import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{


myData:any;
  resData: any;
  userProfileForm: any;
 
  
  ngOnInit() {
   
    this.submit()
 
   
  }

  
  profileData = new FormGroup({


    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    primary_email: new FormControl('',[Validators.required,Validators.email]),
    primary_mobile_number: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
    secondary_email :new FormControl('',[Validators.required,Validators.email]),
    secondary_mobile_number: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
    date_of_birth : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),



  })

  get first_name(){
    return this.profileData.get('first_name')
  };
  
  get last_name(){
    return this.profileData.get('last_name')
  };

  get primary_email(){
    return this.profileData.get('primary_email')
  };
  
  get primary_mobile_number(){
    return this.profileData.get('primary_mobile_number')
  };

  get secondary_email(){
    return this.profileData.get('secondary_email')
  };

   
  get secondary_mobile_number(){
    return this.profileData.get('secondary_mobile_number')
  };

  get date_of_birth(){
    return this.profileData.get('date_of_birth')
  };


  get password(){
    return this.profileData.get('password')
  };






  constructor(private users:UsersService){

  }

  submit(){
    this.users.userDetails().subscribe((res)=>{
      console.log(res);
      
        if(res){
        this.resData = res.data;
        console.log(this.resData);
        
        this.profileData.setValue({

         first_name: this.resData.first_name || "",
         last_name:this.resData.last_name || '',
         primary_email:this.resData.primary_email || '',
         primary_mobile_number: this.resData.primary_mobile_number || '',
         password:"",
         secondary_email:"",
         secondary_mobile_number:"",
         date_of_birth:""


        })

      }
    })


  }
  updateUser(data:any){
    console.log(data);
    
    this.users.updateUserDetails(data).subscribe((res)=>{
      console.log(res);
      
    })
  }



}
