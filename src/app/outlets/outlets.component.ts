import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss']
})
export class OutletsComponent implements OnInit {
  hotProduct$: Observable<Product> = this.productService.get('816780');
  currentProduct$ : Observable<Product>=this.currentProductService.getProduct();
  constructor(private productService: ProductService, private currentProductService:CurrentProductService) { }

  ngOnInit(): void {
  }

}
