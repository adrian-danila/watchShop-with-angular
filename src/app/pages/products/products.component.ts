import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  fetchedData: any[] = [];
  filteredData: any = [];
  sortedProducts: any[] = [];
  isAscendingSort: boolean = true;
  sortOrder: 'asc' | 'desc' | null = null;

  defaultOption: string = 'Default Option';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.fetchedData = data;
      this.filteredData = data;
      this.sortedProducts = data;
      this.sortOrder = null;
      this.sortProductsByPrice();
    });
  }

  sortProductsByPrice(): void {
    if (this.sortOrder ===  null) {
      this.sortedProducts = this.fetchedData.slice();
      return;
    }
  
    this.sortedProducts = this.fetchedData.slice().sort((a, b) => {
      if (this.sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  }

  toggleSortOrder(): void {
    if (this.sortOrder === 'asc') {
      this.isAscendingSort = false;
      this.sortOrder = 'asc';
    } else if (this.sortOrder === 'desc') {
      this.isAscendingSort = true;
      this.sortOrder = 'desc';
    } else {
      this.sortOrder = null;
    }
    this.sortProductsByPrice();
  }
}


