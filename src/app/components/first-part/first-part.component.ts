import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Persona } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css']
})
export class FirstPartComponent implements OnInit {
  persona?: Persona;
  limpio: boolean = false;
  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.apiService.getPersonas()
      .subscribe(persona =>{
        this.persona = persona[0];
      })
  }
  eliminar(): void {
    this.apiService.getPersonas()
      .subscribe(personas => {
        if (personas.length > 1) {
          const personasToDelete = personas.slice(1);
          personasToDelete.forEach(persona => this.apiService.deletePersona(persona.id).subscribe());
          personas.splice(1);          
        }       
      });
      this.limpio = true;
      console.log(this.limpio);
  }
}