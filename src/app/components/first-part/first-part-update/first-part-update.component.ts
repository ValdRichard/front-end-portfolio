import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-first-part-update',
  templateUrl: './first-part-update.component.html',
  styleUrls: ['./first-part-update.component.css']
})
export class FirstPartUpdateComponent implements OnInit {

  form:FormGroup;
  id: string = '';
  persona: any;

  constructor(
    private formBuilder:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      //ACA SE PUEDE PONER SI ES MAIL O OTROS VALIDATORS
      nombreyApellido:['', [Validators.required, Validators.minLength(5)]],
      mail:['', [Validators.required, Validators.minLength(5)]],
      descripcion:['', [Validators.required, Validators.minLength(5)]],
      urlGithub:['', [Validators.required, Validators.minLength(5)]],
      urlLinkedin:['', [Validators.required, Validators.minLength(5)]],
      imageLinkedin:['', [Validators.required, Validators.minLength(5)]],
      imageGithub:['', [Validators.required, Validators.minLength(5)]],
      imageFotoPerfil:['', [Validators.required, Validators.minLength(5)]],
      imageBanner:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.apiService.getPersona(this.route.snapshot.paramMap.get('id')).subscribe(
      (persona: any) => {
        this.persona = persona;
        this.form.controls['nombreyApellido'].setValue(persona.nombreyApellido);
        this.form.controls['mail'].setValue(persona.mail);
        this.form.controls['descripcion'].setValue(persona.descripcion);
        this.form.controls['urlGithub'].setValue(persona.urlGithub);
        this.form.controls['urlLinkedin'].setValue(persona.urlLinkedin);
        this.form.controls['imageLinkedin'].setValue(persona.imageLinkedin);
        this.form.controls['imageGithub'].setValue(persona.imageGithub);
        this.form.controls['imageFotoPerfil'].setValue(persona.imageFotoPerfil);
        this.form.controls['imageBanner'].setValue(persona.imageBanner);
      }
    )
  }
  
  get NombreyApellido(){
    return this.form.get('nombreyApellido');
  }
  get Mail(){
    return this.form.get('mail');
  }
  get UrlGithub(){
    return this.form.get('urlGithub');
  }

  get UrlLinkedin(){
    return this.form.get('urlLinkedin');
  }

  get ImageLinkedin(){
    return this.form.get('imageLinkedin');
  }
  
  get ImageGithub(){
    return this.form.get('imageGithub');
  }

  get ImageFotoPerfil(){
    return this.form.get('imageFotoPerfil');
  }

  get ImageBanner(){
    return this.form.get('imageBanner');
  }

  get Descripcion(){
    return this.form.get('descripcion');
  }

  onEnviar(event:Event){
    event.preventDefault();
    this.apiService.updatePersona(this.form.value, this.route.snapshot.paramMap.get('id'))
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
