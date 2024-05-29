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

  arrayCart:iProduct[]=[]

  constructor(private PrdctSvc:ProductService ) {}

  ngOnInit() {
    this.arrayCart = this.PrdctSvc.arrayCarrello
    this.PrdctSvc.getAllProducts().subscribe(products => {
      this.allProductsArray = products.products
      console.log(this.allProductsArray)
    })
  }

  toggleFavourite(prod:iProduct) {
    this.PrdctSvc.toggleFavourite(prod)
  }

  addToCart(prod:iProduct) {
    this.PrdctSvc.addToCart(prod)
    this.arrayCart = this.PrdctSvc.arrayCarrello
  }

  removeFromCart(prod:iProduct) {
    this.PrdctSvc.removeFromCart(prod)
    this.arrayCart = this.PrdctSvc.arrayCarrello
  }
}
