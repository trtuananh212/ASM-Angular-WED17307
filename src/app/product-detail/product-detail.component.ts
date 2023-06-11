import { Component } from '@angular/core';
import { IProduct } from '../interface/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!:IProduct;
  constructor(
    private route: ActivatedRoute,
    private productServices: ProductService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productServices.getProductsByID(id).subscribe(
        (product) => {
          
        },
        (error) => console.log(error.message)
      )
    })
  }
}
