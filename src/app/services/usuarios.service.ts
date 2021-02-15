import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('page','1');
    params = params.append('nombre','Fernando');

    return this.http.get('https://reqres123.in/api/user', {
      params,      
    }).pipe(
      map( (resp:any)=> resp.data))
  }

}
