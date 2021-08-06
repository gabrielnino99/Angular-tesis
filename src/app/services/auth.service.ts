import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from '../components/interfaces/authData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    crearUsuarioAdoptante(nombre: string, apellidos: string, fecha_nacimiento: string, 
      genero: string, localidad: string, correo: string, num_celular:string, password: string){
      const authData: AuthData = {nombre: nombre, apellidos: apellidos, fecha_nacimiento: fecha_nacimiento, 
      genero: genero, localidad: localidad, correo: correo, num_celular: num_celular, password: password};
      this.http.post("http://localhost:3000/crear-cuenta/crear-adoptante", authData)
      .subscribe(respuesta => {
        console.log(respuesta);
      });
  }
}
