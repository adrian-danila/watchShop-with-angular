import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  product: any;
  fetchedData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProductDetails();
    });

    this.dataService.fetchData().subscribe((data) =>{
      this.fetchedData = data;
    })
  }

  getProductDetails() {
    const adjutedProductId = parseInt(this.productId) - 1;
    this.dataService.getProductById(adjutedProductId.toString()).subscribe((product) => {
      this.product = product;
    });
  }
}
