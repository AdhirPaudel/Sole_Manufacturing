import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private route: Router){}

  onSelectProduct(event: any, value: Number){
    console.log(value);
    this.route.navigate(['/products' , value]);
  }

}
