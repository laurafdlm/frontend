import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { info } from 'console';
import { producto } from './modelo/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  
  private urlGenerica = 'http://localhost:80/listas';
  constructor(private http: HttpClient) { }

  crearLista(name : string){
    
    let apiUrl=this.urlGenerica+"/crearLista"
    return this.http.post<any>(apiUrl, name)
  }
  aniadirProducto(id: string, producto: producto) {
    let apiUrl= this.urlGenerica+"/addProducto";
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'idLista' : id
    })
    return this.http.post<any>(apiUrl, producto, { headers })
  }
}
