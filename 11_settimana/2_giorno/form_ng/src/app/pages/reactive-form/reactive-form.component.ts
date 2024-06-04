import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form!:FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit() {

    this.form = this.fb.group({
      firstName: this.fb.control(null,[Validators.required]),
      lastName: this.fb.control(null,[Validators.required]),
      password: this.fb.control(null,[Validators.required]),
      confirmPassword: this.fb.control(null,[Validators.required, this.correctPasswordConfirmation]),
      gender: this.fb.control(null,[Validators.required]),
      propic: this.fb.control(null,[Validators.required]),
      biography: this.fb.control(null,[Validators.required]),
      username: this.fb.control(null,[Validators.required]),
    })
  }

  invia(){
    console.log(this.form.value);
  }

  getMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']
  }

  isInvalidNTouched(fieldname:string){
    const field = this.form.get(fieldname)
    return field?.invalid && field?.touched
  }

  correctPasswordConfirmation(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

}
