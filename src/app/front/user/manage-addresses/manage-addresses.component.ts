import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss']
})
export class ManageAddressesComponent implements OnInit{

addressData:any=[];
sunil:any;

  constructor(private address:UsersService){}
  ngOnInit() {

    this.userData();
    
  }
  
  profileData = new FormGroup({


    address_line_1: new FormControl('',[Validators.required]),
    address_line_2: new FormControl('',[Validators.required]),
    area: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    postal_code: new FormControl('',[Validators.required]),
    landmark: new FormControl('',[Validators.required]),
    tag: new FormControl('',[Validators.required]),







    // last_name: new FormControl('',[Validators.required]),
    // primary_email: new FormControl('',[Validators.required,Validators.email]),
    // primary_mobile_number: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
    // // alternate_email: new FormControl(''),


  })

  get address_line_1(){
    return this.profileData.get('address_line_1')
  };
  
  get address_line_2(){
    return this.profileData.get('address_line_2')
  };

  
  get area(){
    return this.profileData.get('area')
  };

  
  get city(){
    return this.profileData.get('city')
  };

  
  get state(){
    return this.profileData.get('state')
  };

  
  get country(){
    return this.profileData.get('country')
  };

  
  get postal_code(){
    return this.profileData.get('postal_code')
  };

  
  get landmark(){
    return this.profileData.get('landmark')
  };

  
  get tag(){
    return this.profileData.get('tag')
  };



 
  submit(data:any){
    this.address.addAddress(data).subscribe((res)=>{
      console.log(res);
      
    })

   
}

userData(){
  this.address.userDetails().subscribe((res)=>{
    console.log(res);
    this.addressData=res.data.addresses;
    // this.sunil=this.addressData[0].city;
    console.log(this.addressData);
  })
}
}