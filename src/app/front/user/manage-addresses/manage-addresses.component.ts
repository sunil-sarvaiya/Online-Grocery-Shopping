import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { window } from 'rxjs';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss']
})
export class ManageAddressesComponent implements OnInit{

addressData:any=[];
  resData: any;
  Encryption:any;

  constructor(private address:UsersService, private encryption:EncryptionService){}
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
      // this.profileData.reset();
      this.userData()


      
    

      this.address.updateAddress(this.Encryption,data).subscribe((res)=>{
        console.log("update res",res);
        this.userData()
        // this.profileData.reset();
      // this.profileData.reset();
      })


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

deleteAddress(id:any){
  console.log(id);
  // let idString=id.toString();

  // console.log(idString);
  

  this.encryption.encryptionFunction(id.toString()).subscribe((res)=>{
    console.log(res);


    this.address.deleteAddress(res.data).subscribe((res)=>{
      console.log(res);
      // alert("address deleted")
      this.userData()
      
    })
    
  })

 

}
updateAddress(item:any){
console.log("id",item.id);
let addressId = item.id;
  
  this.encryption.encryptionFunction(addressId.toString()).subscribe((res)=>{
    console.log("encryption res",res.data);
    this.Encryption = res.data

    if(item){
      this.resData = item;
      console.log(this.resData);
      
      this.profileData.setValue({
        address_line_1: this.resData.address_line_1 || "",
        address_line_2: this.resData.address_line_2 || '',
        area:  this.resData.area || "",
        city:  this.resData.city || "",
        state:  this.resData.state || "",
        country:  this.resData.country || "",
        postal_code:  this.resData.postal_code || "",
        landmark:  this.resData.landmark || "",
        tag:  this.resData.tag || "",
      })

      this.userData()
    }
    

   

      
    // if(res){
    //   this.resData = res.data;
    //   console.log("sunil",this.resData);
      
      // this.profileData.setValue({
      //   address_line_1: this.resData.address_line_1 || "",
      //   address_line_2: this.resData.address_line_2 || '',
      //   area:  this.resData.area || "",
      //   city:  this.resData.city || "",
      //   state:  this.resData.state || "",
      //   country:  this.resData.country || "",
      //   postal_code:  this.resData.postal_code || "",
      //   landmark:  this.resData.landmark || "",
      //   tag:  this.resData.tag || "",
      // })

    // }
    
    // })
  

  })

}

}