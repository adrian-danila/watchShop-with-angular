import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-details-box-info',
  templateUrl: './product-details-box-info.component.html',
  styleUrls: ['./product-details-box-info.component.scss']
})
export class ProductDetailsBoxInfoComponent {
@Input() product: any = {};
}

