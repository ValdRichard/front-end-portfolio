import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-proyects-create',
  templateUrl: './proyects-create.component.html',
  styleUrls: ['./proyects-create.component.css']
})
export class ProyectsCreateComponent implements OnInit {

  form:FormGroup;
  id: string = '';
  proyecto: any;

  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      nombreProyecto:['', [Validators.required, Validators.minLength(5)]],
      descripcionProyecto:['', [Validators.required, Validators.minLength(5)]],
      imageProyecto:['', [Validators.required, Validators.minLength(5)]],
      repoUrl:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }
  
  get NombreProyecto(){
    return this.form.get('nombreProyecto');
  }
  get DescripcionProyecto(){
    return this.form.get('descripcionProyecto');
  }

  get RepoUrl(){
    return this.form.get('repoUrl');
  }
  
  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.createProyecto(this.form.value)
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
