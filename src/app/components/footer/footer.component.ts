import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Persona } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  persona?: Persona;

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
}