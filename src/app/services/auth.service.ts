import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from '../components/interfaces/authData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    crearUsuarioAdoptante(correo: string, password: string){
      const authData: AuthData = {correo: correo, password: password};
      this.http.post("http://localhost:3000/crear-cuenta/crear-adoptante", authData)
      .subscribe(respuesta => {
        console.log(respuesta);
      });
  }
}
