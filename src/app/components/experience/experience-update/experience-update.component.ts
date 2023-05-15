import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-experience-update',
  templateUrl: './experience-update.component.html',
  styleUrls: ['./experience-update.component.css']
})
export class ExperienceUpdateComponent implements OnInit {

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
    this.apiService.getExperiencia(this.route.snapshot.paramMap.get('id')).subscribe(
      (experiencia: any) => {
        this.experiencia = experiencia;
        this.form.controls['nombrePuesto'].setValue(experiencia.nombrePuesto);
        this.form.controls['nombreLugar'].setValue(experiencia.nombreLugar);
        this.form.controls['descripcion'].setValue(experiencia.descripcion);
        this.form.controls['fechaInicio'].setValue(experiencia.fechaInicio);
        this.form.controls['fechaFinal'].setValue(experiencia.fechaFinal);
      }
    )
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
    this.apiService.updateExperiencia(this.form.value, this.route.snapshot.paramMap.get('id'))
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
