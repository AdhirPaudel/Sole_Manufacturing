import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product.model';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'assets/mocks/json/products.json';
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.url).pipe(
      map(products => products.find(p => p.id === id)!)
    );
  }
}
