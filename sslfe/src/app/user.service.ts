import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://alarcosj.esi.uclm.es/fakeAccountsBE/users/registrar1';
  private urlGenerica = 'https://alarcosj.esi.uclm.es/fakeAccountsBE/users';
  constructor(private http: HttpClient) { }

  register1(email : string, pwd1 : string, pwd2 : string){
    let body = {
      email : email,
      pwd1 : pwd1, 
      pwd2 : pwd2
    }

    //tambien esta la opcion de que la url sea poner justo aqui debajo el /users/registrar1
    //let urlFinal = this.apiUrl + "/users/registrar1"

    return this.http.post<any>(this.apiUrl, body)
  }
  
  login1(email : string, pwd : string){
    let body = {
      email : email,
      pwd : pwd
    }
    //PREGUNTAR ANA SOBRE EL ERROR EXTRAÑO QUE NO ENTIENDO 

    console.log(JSON.stringify(body))
    let urlLogin1=this.urlGenerica+'/login1';
    return this.http.put(urlLogin1, body, {responseType:'text'});
  }
  
}
