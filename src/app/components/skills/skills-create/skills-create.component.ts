import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-skills-create',
  templateUrl: './skills-create.component.html',
  styleUrls: ['./skills-create.component.css']
})
export class SkillsCreateComponent implements OnInit {

  form:FormGroup;
  id: string = '';
  skill: any;

  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      nombreHabilidad:['', [Validators.required, Validators.minLength(5)]],
      porcentaje:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }
  
  get NombreHabilidad(){
    return this.form.get('nombreHabilidad');
  }

  get Porcentaje(){
    return this.form.get('porcentaje');
  }

  
  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.createSkill(this.form.value)
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
