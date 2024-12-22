import { Component } from '@angular/core';
import { producto } from '../modelo/producto.model';
import { ListaService } from '../lista.service';
import { ManagerService } from '../manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-listas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-listas.component.html',
  styleUrl: './detalle-listas.component.css'
})
export class DetalleListasComponent {
    nuevoProducto : string='';
    unidadesPedidas : number=0;
    unidadesCompradas: number=0;
    producto : producto = new producto;
    lista? : string="";
    
  
    constructor(private listaService: ListaService, public manager : ManagerService){
      this.lista=this.manager.listaSeleccionada?.name;
    }
  
    aniadirProducto(){
      console.log('voy a almacenar producto');
      this.producto.crearProducto (this.nuevoProducto,this.unidadesPedidas, this.unidadesCompradas);
      this.listaService.aniadirProducto(this.manager.listaSeleccionada!.id,this.producto).subscribe(
        (response) => {
          console.log('producto agregado correctamente:', response);
        },
        (error) => {
          console.error('Error al almacenar el producto:', error);
        }
      );;
    }
  }
  
