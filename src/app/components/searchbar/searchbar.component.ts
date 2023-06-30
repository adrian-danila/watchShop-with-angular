import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
searchForm: FormGroup;
private apiURL: string =
    'https://watchshop-angular-firebase-default-rtdb.firebaseio.com/products.json';


constructor(private http: HttpClient) {
  this.searchForm = new FormGroup({
    searchTerm: new FormControl('')
  });
}

search() {
  const searchTerm = this.searchForm.value.searchTerm;
  this.http.get<any>(`${this.apiURL}/products?search=$search=${searchTerm}`).subscribe(response => {
    console.log('Api Response:', response);
  })
}


}
