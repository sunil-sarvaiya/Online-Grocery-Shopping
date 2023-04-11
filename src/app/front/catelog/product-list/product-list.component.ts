import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { NewProductService } from 'src/app/shared/services/new-product.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { addProduct } from 'src/app/model/user-model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


  
//   catArray:any=[
  
//     {category:'Fruit', name:'orange', quantity:500, price:2, img:'/assets/orange.jpeg'},
//     {category:'vagetable', name:'potato', quantity:500, price:2, img:'/assets/potato.jpeg'},
//     {category:'Fruit', name:'Strawberry', quantity:500, price:2, img:'/assets/straberry.jpeg'},
//     {category:'vagetable', name:'carrot', quantity:500, price:2, img:'/assets/carrot.png'},
//     {category:'Fruit', name:'apple', quantity:500, price:2, img:'/assets/apple.jpeg'},
//     {category:'vagetable', name:'tomato', quantity:500, price:2, img:'/assets/tomoto.jpg'},

    

    


// ];

// filter = this.catArray;

// forFilter(category: string) {
//   this. filter = this.catArray.filter((catArray: { category: string; }) => catArray.category == category);
// }

// }

export class ProductListComponent implements OnInit {


  categoryId:any;
  categories:string = 'all categories';
  productList!: any;
  encryptionId: any;
  category_productArr: any;







constructor(
    private category:CategoryService,
    private newProduct:NewProductService,
    private encryptionService:EncryptionService,
    private currentProduct: ActivatedRoute,
    private cart:CartService,
    private product:ProductsService

    ){

}
  ngOnInit() {

    this.getProductList();
    this.getProduct();



    this.category.allCategories().subscribe((res)=>{
      console.log("category response", res.data[this.categoryId-1].title);
      this.categories = res.data[this.categoryId-1].title

    })
  }


  
  getProductList() {
    // this.product.getProduct().subscribe((res: any) => {
    //   this.productList = res;
    // });

    this.newProduct.getAllProducts().subscribe((res:any)=>{
      console.log(res.data);
      this.productList = res.data;
    })
  }




  filteredValue: string | null = 'all';
  filterdata(data: string) {
    this.categoryId = data;
    console.log(this.categoryId);
    if(this.categoryId == "all"){
      this.categories = "all categories"
    }
    this.encryption(this.categoryId)

    this.category.allCategories().subscribe((res:any)=>{
      console.log("category response", res.data[this.categoryId-1].title);
      this.categories = res.data[this.categoryId-1].title
    })
  }



  getProduct() {
  

    this.currentProduct.paramMap.subscribe((params) => {
      if(params.get('name')){
        this.categoryId = params.get('name');
        console.log(" this.categoryId:", this.categoryId)
        this.encryption(this.categoryId);
      }
      else{
        this.categoryId = "all"
      }
    });
  }

  
  addToCart(id: number) {
    let item = this.productList.find(
      (product: addProduct) => product.id === id
    );
    if (item) {
      item.quantity = 1;
      this.cart.addItemToCart(item);
      // this.toast.success('item is Added!!');
    }
  }


  
  encryption(id: any) {
    this.encryptionService.encryptionFunction(id).subscribe({
      next: (encryptionResponse) => {
        console.log('encryption response::', encryptionResponse);
        this.encryptionId = encryptionResponse.data;
        console.log('Encryption data:', this.encryptionId);
        this.newProduct.getProductByCategoryId(this.encryptionId).subscribe({
          next: (category_products: any) => {
            if (category_products) {
              console.log(
                'Category Wise Products-response:',
                category_products
              );
              this.category_productArr = category_products.data;
              console.log(
                'category wise products:arr=>>>',
                this.category_productArr
              );
            }
          },
          error: () => {},
        });
      },
      error: (encryptionError: any) => {
        console.log('Encryption Error:', encryptionError);
      },
    });
  }



}










