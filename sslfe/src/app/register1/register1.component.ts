import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-register1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register1.component.html',
  styleUrl: './register1.component.css'
})
export class Register1Component {

  email? : string
  pwd1? : string
  pwd2? : string
  respuestaOK : boolean
  contraseniasCoinciden : boolean
  erorrEnRegistro : boolean

  constructor(private service : UserService) {
    this.respuestaOK=false;
    this.contraseniasCoinciden=false
    this.erorrEnRegistro=false
   }

  registrar() {
    this.respuestaOK=false
    this.contraseniasCoinciden=false
    this.erorrEnRegistro=false
    if (this.pwd1 != this.pwd2) {
      console.error('Las contraseñas no coinciden');
      this.contraseniasCoinciden=true
      
      return;
    }

    this.service.register1(this.email!, this.pwd1!, this.pwd2!).subscribe(
      ok => {
        console.log('Registro exitoso', ok);
        this.respuestaOK=true
      },
      error => {
        console.error('Error en el registro', error);
        this.erorrEnRegistro=true;
      }
    );
  }
}

