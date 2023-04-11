import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  catData:any=[];

  ngOnInit(){
    this.categoryDetails()
  }
  constructor(private category:CategoryService){

  }




  categoryDetails(){
try{
    this.category.allCategories().subscribe((res)=>{
      console.log("category details",res);

      if(res){
        this.catData=res.data;
      }
    })
  }
  catch(error:any){
    console.log(error.error.message);
    

  }
  




  

  }}
