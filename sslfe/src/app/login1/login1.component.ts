import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService : UserService) {    
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
        
      },
    );
  }


  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      console.warn("Formulario invalido");
    }
    else{
      console.log("todo OK" + JSON.stringify(this.loginForm.value, null, 2));
      console.table(this.loginForm.value);
      //ENVIAR DATOS SERVIDOR EXTERNO para comprobar credenciales
      this.userService.login1(this.loginForm.controls['email'].value, this.loginForm.controls['pwd'].value).subscribe((data) => {  
        console.log(JSON.stringify(data));
      });  ;
    }

  }
  onReset(){

  }
}
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value) {
          return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
            return !passwordValid ? {passwordStrength:true}: null;
      /**tambien se podría devolver un objeto de este tipo
       * {
          passwordStrength: {
          hasUpperCase: true,
          hasLowerCase: true,
          hasNumeric: false
          }
        }
       */
  }
}
