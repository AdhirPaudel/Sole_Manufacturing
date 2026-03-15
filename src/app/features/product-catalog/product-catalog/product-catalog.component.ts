import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-product-catalog',
  imports: [CommonModule, RouterLink],
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
    console.log(this.filteredProducts);
  }

  productFilter(event: any) {
    const code = event?.target?.value;
    console.log(code)
    // 1. Find if any product actually matches the code
    const hasMatch = this.products.some(e => e.filterTag === code);

    // 2. If a match exists, filter for it. If not, show the whole list.
    this.filteredProducts = hasMatch
      ? this.products.filter(e => e.filterTag === code)
      : this.products;

  }
}
