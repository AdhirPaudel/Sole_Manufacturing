import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => 
            import('./features/home/home/home.component').then(m => m.HomeComponent)
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
