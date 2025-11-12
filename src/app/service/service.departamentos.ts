import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<Array<Departamento>> {
    let request = 'api/Departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.get<Array<Departamento>>(url);
  }

  findDepartamento(idDepartamento: number): Observable<Departamento> {
    let request = 'api/Departamentos/' + idDepartamento;
    let url = environment.urlApiDepartamentos + request;
    return this._http.get<Departamento>(url);
  }

  updateDepartamento(departamento: Departamento): Observable<any> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-type', 'application/json');

    let request = 'api/Departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.put(url, json, { headers: header });
  }

  createDepartamento(departamento: Departamento): Observable<any> {
    //COMO REACT
    let json = JSON.stringify(departamento);
    //CREAMOS CABECERA DE PETICION
    let header = new HttpHeaders();
    //INDICAMOS EL TIPO DE OBJETO A ENVIAR
    header = header.set('Content-type', 'application/json');

    let request = 'api/Departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.post<Array<Departamento>>(url, json, { headers: header });
  }
}
