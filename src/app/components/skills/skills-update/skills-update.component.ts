import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-skills-update',
  templateUrl: './skills-update.component.html',
  styleUrls: ['./skills-update.component.css']
})
export class SkillsUpdateComponent implements OnInit {

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
    this.apiService.getSkill(this.route.snapshot.paramMap.get('id')).subscribe(
      (skills: any) => {
        this.skill = skills;
        this.form.controls['nombreHabilidad'].setValue(skills.nombreHabilidad);
        this.form.controls['porcentaje'].setValue(skills.porcentaje);
      }
    )
  }
  
  get NombreHabilidad(){
    return this.form.get('nombreHabilidad');
  }

  get Porcentaje(){
    return this.form.get('porcentaje');
  }

  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.updateSkill(this.form.value, this.route.snapshot.paramMap.get('id'))
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
