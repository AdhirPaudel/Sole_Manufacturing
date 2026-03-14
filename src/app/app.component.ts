import { Component } from '@angular/core';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SP-Application';

  constructor(private router: Router) {}

  ngOnInit() {
    // On every browser refresh, redirect to home
    // if (performance.navigation.type === 1) {
    //   // type 1 = page was refreshed
    //   this.router.navigate(['/']);
    // }
  }
}
