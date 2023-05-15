import { Component} from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Credentials} from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  login(form: NgForm) {
    this.apiService.login(this.creds)
      .subscribe(response => {
        //Esta es la pagina de inicio a la que se redirige luego del login
        this.router.navigate(['portfolio'])
      })
  }
}
