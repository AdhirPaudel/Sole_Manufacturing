import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        loadComponent: () => 
            import('./features/about/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'products',
        loadComponent: () => 
            import('./features/product-catalog/product-catalog/product-catalog.component').then(m => m.ProductCatalogComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => 
            import('./features/product-detail/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    }
];
