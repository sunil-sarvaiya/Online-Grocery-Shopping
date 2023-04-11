import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders=[
    {
      
      id: 1,
      customerName: 'Sunil Sarvaiya',
      orderDate: new Date(2023, 2, 31),
      items: [
        { name: 'Product A', quantity: 2 },
        { name: 'Product B', quantity: 1 },
        { name: 'Product C', quantity: 3 }
      ],
      totalPrice: 100.0
    },

    {
      
      id: 2,
      customerName: 'Sunil Sarvaiya',
      orderDate: new Date(2023, 2, 31),
      items: [
        { name: 'Product A', quantity: 2 },
        { name: 'Product B', quantity: 1 },
        { name: 'Product C', quantity: 3 }
      ],
      totalPrice: 100.0
    },

  ]

}
