import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsComponent } from 'src/app/pages/products/products.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly apiURL: string =
    'https://watchshop-angular-firebase-default-rtdb.firebaseio.com/products.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    return this.http.get<any>(this.apiURL);
  }

  getProductById(id: string): Observable<any> {
    const productURL = `https://watchshop-angular-firebase-default-rtdb.firebaseio.com/products/${id}.json`;
    return this.http.get<any>(productURL);
  }

}
