import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
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
}
