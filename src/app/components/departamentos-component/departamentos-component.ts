import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../service/service.departamentos';

@Component({
  selector: 'app-departamentos',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamentos) {}
  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos(): void {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }

  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id).subscribe((response) => {
      console.log('Eliminado ' + id);
      this.loadDepartamentos();
    });
  }
}
