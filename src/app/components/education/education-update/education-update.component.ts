import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  form:FormGroup;
  id: string = '';
  educacion: any;

  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      nivel:['', [Validators.required, Validators.minLength(5)]],
      tituloEdu:['', [Validators.required, Validators.minLength(5)]],
      periodoEdu:['', [Validators.required, Validators.minLength(5)]],
      institucionEdu:['', [Validators.required, Validators.minLength(5)]],
      descripcionEdu:['', [Validators.required, Validators.minLength(5)]],
      urlLogoEdu:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.apiService.getEducacion(this.route.snapshot.paramMap.get('id')).subscribe(
      (educacion: any) => {
        this.educacion = educacion;
        this.form.controls['nivel'].setValue(educacion.nivel);
        this.form.controls['tituloEdu'].setValue(educacion.tituloEdu);
        this.form.controls['periodoEdu'].setValue(educacion.periodoEdu);
        this.form.controls['institucionEdu'].setValue(educacion.institucionEdu);
        this.form.controls['descripcionEdu'].setValue(educacion.descripcionEdu);
        this.form.controls['urlLogoEdu'].setValue(educacion.urlLogoEdu);
      }
    )
  }
  
  get Nivel(){
    return this.form.get('nivel');
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
  
  get UrlLogoEdu(){
    return this.form.get('urlLogoEdu');
  }

  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.updateEducacion(this.form.value, this.route.snapshot.paramMap.get('id'))
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
