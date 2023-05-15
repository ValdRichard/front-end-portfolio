import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-experience-create',
  templateUrl: './experience-create.component.html',
  styleUrls: ['./experience-create.component.css']
})
export class ExperienceCreateComponent implements OnInit {

  form:FormGroup;
  id: string = '';
  experiencia: any;

  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      nombrePuesto:['', [Validators.required, Validators.minLength(5)]],
      nombreLugar:['', [Validators.required, Validators.minLength(5)]],
      descripcion:['', [Validators.required, Validators.minLength(5)]],
      fechaInicio:['', [Validators.required, Validators.minLength(5)]],
      fechaFinal:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }
  
  get NombrePuesto(){
    return this.form.get('nombrePuesto');
  }
  get NombreLugar(){
    return this.form.get('nombreLugar');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }

  get FechaInicio(){
    return this.form.get('fechaInicio');
  }

  get FechaFinal(){
    return this.form.get('fechaFinal');
  }
  
  get ImageExp(){
    return this.form.get('imageExp');
  }

  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.createExperiencia(this.form.value)
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
