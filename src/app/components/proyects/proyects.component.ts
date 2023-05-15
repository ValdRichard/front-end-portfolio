import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Proyecto } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyectos?: Proyecto[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.apiService.getProyectos()
      .subscribe(proy =>{
        this.proyectos = proy;
      })
  }
  
  
  eliminar(id: any): void{
    this.apiService.deleteProyecto(id)
      .subscribe(data=>{
        window.location.reload();
      })
  }
}
