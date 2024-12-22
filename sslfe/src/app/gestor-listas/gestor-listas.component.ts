import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaService } from '../lista.service';
import { lista } from '../modelo/lista.model';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-gestor-listas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestor-listas.component.html',
  styleUrl: './gestor-listas.component.css'
})
export class GestorListasComponent {

  nuevaLista? : string;
  misListas : lista[] = [];

  constructor(private service : ListaService, private router : Router, public manager : ManagerService){

  }

  agregarLista(){

    console.log("voy a almacenar una lista nueva"+this.nuevaLista)
    this.service.crearLista(this.nuevaLista!).subscribe(
      (response) => {
        let listaCreada = new lista();
        listaCreada.name = response.name;
        listaCreada.id = response.id;
        console.log('Lista creada con exito', response);
        this.misListas.push(listaCreada);
      },
      (error) => {
        console.error('Error al crear lista', error);
      }
    );
  }

  agregarProducto(indice : number){
    this.manager.listaSeleccionada=this.misListas[indice]
    this.router.navigate(['/DetalleLista']);
    
  }
}
