import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private http:HttpClient) { }


baseURL=environment.base;
get_product_by_category_id = environment.getProductByCategoryId;
get_product_by_product_id=environment.getProductById;
get_all_products = environment.getAllProducts;
header=environment.header;


getProductByCategoryId(encryption: any) {
  try {
    return this.http.get<any>(
      this.baseURL + this.get_product_by_category_id,
      {
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'skip-browser-warning',
          'Access-Control-Allow-Origin': '*',
          'category_id': encryption,
        }),
      }
    );
  } catch (error: any) {
    return throwError(() => new Error(error));
  }
}



getProductById(encryption: any) {
  try {
    return this.http.get<any>(this.baseURL + this.get_product_by_product_id, {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'skip-browser-warning',
        'Access-Control-Allow-Origin': '*',
        'product_id': encryption,
      }),
    });
  } catch (error: any) {
    return throwError(() => new Error(error));
  }
}



getAllProducts(){
  return this.http.get(this.baseURL + this.get_all_products, this.header)
}





}