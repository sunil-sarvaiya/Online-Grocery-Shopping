import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL=environment.base;
  allCategory=environment.allCategory;
  get_product_by_category_id = environment.getProductByCategoryId;

  constructor(private http:HttpClient) { }


allCategories(){
  return this.http.get<any>(this.baseURL+this.allCategory,
    {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'skip-browser-warning',
        'Access-Control-Allow-Origin': '*',
      }),
    })
}


}
