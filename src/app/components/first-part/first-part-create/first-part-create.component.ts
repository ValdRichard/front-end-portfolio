import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-first-part-create',
  templateUrl: './first-part-create.component.html',
  styleUrls: ['./first-part-create.component.css']
})
export class FirstPartCreateComponent implements OnInit {

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
      nombreYApellido:['', [Validators.required, Validators.minLength(5)]],
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
  }
  
  get NombreYApellido(){
    return this.form.get('nombreYApellido');
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
    this.apiService.createPersona(this.form.value)
      .subscribe(data=>{
        this.router.navigate(['portfolio'])
      })
  }
}
