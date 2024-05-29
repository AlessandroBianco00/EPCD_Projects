import { iProduct } from './../../Models/product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allProductsArray:iProduct[] = []

  constructor(private PrdctSvc:ProductService ) {}

  ngOnInit() {
    this.PrdctSvc.getAllProducts().subscribe(products => {
      this.allProductsArray = products.products
      console.log(this.allProductsArray)
    })
  }

  toggleFavourite(prod:iProduct) {
    this.PrdctSvc.toggleFavourite(prod)
    console.log(this.PrdctSvc.arrayPreferiti);

  }
}
