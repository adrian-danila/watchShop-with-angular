import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // readonly baseUrl: string = 'https://watchshop-angular-firebase-default-rtdb.firebaseio.com/products.json';

  // constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }
}
