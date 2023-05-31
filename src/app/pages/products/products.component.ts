import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Price {
  value: string;
  viewValue: string;
}

interface Result {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  prices: Price[] = [
    {value: 'low-0', viewValue: 'Price: Low-High'},
    {value: 'high', viewValue: 'Price: High-Low'},
  ];

  results: Result[] = [
    {value: 25, viewValue: 25},
    {value: 50, viewValue: 50},
    {value: 100, viewValue: 100},
    {value: 150, viewValue: 150}
  ]

  posts: any[] = [];
  constructor(private http: HttpClient) {
    http.get('https://api.escuelajs.co/api/v1/products')
    .subscribe(response => {
  this.posts;
    });
  }
}
