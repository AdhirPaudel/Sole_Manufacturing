import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  quantity = 10;
  activeTab = 'specs';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.productService.getById(id).subscribe(data => {
      this.product = data;
    });
  }

  increaseQty() { this.quantity++; }
  decreaseQty() { if (this.quantity > 1) this.quantity--; }
  setTab(tab: string) { this.activeTab = tab; }
}