import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Educacion} from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educaciones?: Educacion[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.apiService.getEducaciones()
      .subscribe(edu =>{
        this.educaciones = edu;
      })
  }
  
  eliminar(id: any): void{
    console.log(id);
    this.apiService.deleteEducacion(id)
      .subscribe(data=>{
        window.location.reload();
      })
  }
}
