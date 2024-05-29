import { ProductService } from './../../services/product.service';
import { iProduct } from './../../Models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  yourFavouritesArray:iProduct[] = []

  constructor(private PrdctSvc:ProductService ) {}

  ngOnInit(){
    this.yourFavouritesArray = this.PrdctSvc.arrayPreferiti
  }
}
