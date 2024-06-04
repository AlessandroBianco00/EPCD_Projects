import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
      confirmPassword: this.fb.control(null,[Validators.required]),
      gender: this.fb.control(null,[Validators.required]),
      propic: this.fb.control(null,[Validators.required]),
      biography: this.fb.control(null,[Validators.required]),
      username: this.fb.control(null,[Validators.required]),
    }, {
      validators: this.passwordMatch
    })
  }

  invia(){
    console.log(this.form.value);
  }

  isInvalidNTouched(fieldname:string){
    const field = this.form.get(fieldname)
    return field?.invalid && field?.touched
  }

  passwordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get('password');
    const passConf = control.get('confirmPassword');
    return (pass?.value === passConf?.value) ? null : {passwordMatch: false};
  };

  // Soluzione simile
  correctPasswordConfirmation(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  //Validator funzionante (stackoverflow), da rivedere l'utilizzo e come collegarlo correttamente
  /*matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName);

        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }

        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
  }*/

}
