import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-education-create',
  templateUrl: './education-create.component.html',
  styleUrls: ['./education-create.component.css']
})
export class EducationCreateComponent implements OnInit {
  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      tituloEdu:['', [Validators.required, Validators.minLength(5)]],
      periodoEdu:['', [Validators.required, Validators.minLength(5)]],
      institucionEdu:['', [Validators.required, Validators.minLength(5)]],
      descripcionEdu:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit():void{
  }

  get TituloEdu(){
    return this.form.get('tituloEdu');
  }
  get PeriodoEdu(){
    return this.form.get('periodoEdu');
  }

  get InstitucionEdu(){
    return this.form.get('institucionEdu');
  }

  get DescripcionEdu(){
    return this.form.get('descripcionEdu');
  }

  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.createEducacion(this.form.value)
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
