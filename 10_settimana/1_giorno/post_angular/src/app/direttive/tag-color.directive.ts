import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTagColor]'
})
export class TagColorDirective {

  constructor(private ref :ElementRef) { }

  colorRgb:number = Math.floor(Math.random()*255)
  colorRgb2:number = Math.floor(Math.random()*255)
  colorRgb3:number = Math.floor(Math.random()*255)

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = `rgb(${this.colorRgb}, ${this.colorRgb2}, ${this.colorRgb3})`


  }

}
