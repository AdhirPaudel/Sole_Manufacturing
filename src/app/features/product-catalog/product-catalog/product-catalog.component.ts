import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-product-catalog',
  imports: [CommonModule],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent {

  constructor(private productService: ProductService) { }

  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory = 'All';
  categories = ['All', 'Performance', 'Trail', 'Casual'];

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = category === 'All'
      ? this.products
      : this.products.filter(p => p.category === category);
  }

}
