import { HttpHeaders } from "@angular/common/http";


export const environment = {
    base:'https://7a12-117-217-127-105.ngrok-free.app/api/v1/',
    register:'customer/register',
    login:'customer/login',
    changePassword:'customer/changePassword',
    userDetails:'customer/customer-details',
    address:'customer/add-customer-address',
    updateUser: 'customer/update-customer',
    encryption:'encryption',
    deleteAddress:'customer/delete-customer-address',
    updateAddress:'customer/update-customer-address',
    allCategory:'/category/get-all-categories',
    getProductByCategoryId:'product/get-product-by-category-id',
    header:{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})},
    getProductById:'product/get-product-by-id',
    getAllProducts:'product/get-all-products',


    addOrder:'order/add-order',
    getOrderById:'order/get-order-by-id',







    // baseUrl:'http://localhost:3000/',
     // login:'login',
    // registration:'registration',
    
};
