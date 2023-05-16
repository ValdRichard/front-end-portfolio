import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Experiencia} from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencias?: Experiencia[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.apiService.getExperiencias()
      .subscribe(exp =>{
        this.experiencias = exp;
        
      })
  }
  
  
  eliminar(id: any): void{
    console.log(id);
    this.apiService.deleteExperiencia(id)
      .subscribe(data=>{
        this.experiencias = this.experiencias?.filter(data => data.id !== id);
      })
  }
}
