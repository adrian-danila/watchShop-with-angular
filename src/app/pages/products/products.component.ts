import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Product } from 'src/app/model/products';

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


export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetchProducts();
  }

  onProductFetch() {
    this.fetchProducts();
  }

 

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

  onProductCreate(products: { title: string;
    price: number;
    description: string;
    image: string;
    id?: string;}){
      console.log(products);
      const headers = new HttpHeaders({'myHeader': 'WatchShop'});
      this.http.post('https://fakestoreapi.com/products', products,{headers: headers})
      .subscribe((res) => {
        // console.log(res);
      })
    }

  private fetchProducts() {
    this.http.get<{[key:string]: Product}>('https://fakestoreapi.com/products')
    .pipe(map((res)=>{
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
    .subscribe((products) => {
      console.log(products);
      this.allProducts = products;
    })
  }

}
