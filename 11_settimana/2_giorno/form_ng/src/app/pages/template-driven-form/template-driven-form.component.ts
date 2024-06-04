import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  @ViewChild('form',{static:true}) form!:NgForm

  submit(form:NgForm) {
    //console.log(form) funzioanno entrambi
    console.log(this.form)

    this.form.reset();
  }
}
