import { iProduct } from './../Models/product';
import { iJsonObj } from './../Models/json-obj';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dummyJsonUrl:string = 'https://dummyjson.com/products'

  arrayPreferiti:iProduct[]=[]

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<iJsonObj> {
    return this.http.get<iJsonObj>(this.dummyJsonUrl)
  }

  toggleFavourite(prod:iProduct) {
    if (this.arrayPreferiti.find(product => product.id == prod.id)) {
      this.arrayPreferiti = this.arrayPreferiti.filter(product => product.id!= prod.id)
    } else {
      this.arrayPreferiti.push(prod)
    }
  }
}
