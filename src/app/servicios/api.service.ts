import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Persona, Educacion, Experiencia, Proyecto, Skill, Credentials} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //Metodos de Persona

  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:8080/api/persona/getAll')
  }

  getPersona(id: any): Observable<Persona>{
    return this.http.get<Persona>(`http://localhost:8080/api/persona/${id}`)
  }

  createPersona(formData:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/persona/create', formData);
  }

  updatePersona(formData:any, id:any): Observable<any>{
    return this.http.put(`http://localhost:8080/api/persona/${id}`, formData);
  }

  deletePersona(id:any): Observable<any>{
    return this.http.delete(`http://localhost:8080/api/persona/${id}`);
  }

  //Metodos de Educacion

  getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>('http://localhost:8080/api/educaciones/getAll')
  }

  getEducacion(id: any): Observable<Educacion>{
    return this.http.get<Educacion>(`http://localhost:8080/api/educaciones/${id}`)
  }

  createEducacion(formData:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/educaciones/create', formData);
  }

  updateEducacion(formData:any, id:any): Observable<any>{
    return this.http.put(`http://localhost:8080/api/educaciones/${id}`, formData);
  }

  deleteEducacion(id:any): Observable<any>{
    return this.http.delete(`http://localhost:8080/api/educaciones/${id}`);
  }

  //Metodos de Experiencia

  getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('http://localhost:8080/api/experiencias/getAll')
  }

  getExperiencia(id: any): Observable<Experiencia>{
    return this.http.get<Experiencia>(`http://localhost:8080/api/experiencias/${id}`)
  }

  createExperiencia(formData:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/experiencias/create', formData);
  }

  updateExperiencia(formData:any, id:any): Observable<any>{
    return this.http.put(`http://localhost:8080/api/experiencias/${id}`, formData);
  }

  deleteExperiencia(id:any): Observable<any>{
    return this.http.delete(`http://localhost:8080/api/experiencias/${id}`);
  }

  //Metodos de Skill

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>('http://localhost:8080/api/skills/getAll')
  }

  getSkill(id: any): Observable<Skill>{
    return this.http.get<Skill>(`http://localhost:8080/api/skills/${id}`)
  }

  createSkill(formData:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/skills/create', formData);
  }

  updateSkill(formData:any, id:any): Observable<any>{
    return this.http.put(`http://localhost:8080/api/skills/${id}`, formData);
  }

  deleteSkill(id:any): Observable<any>{
    return this.http.delete(`http://localhost:8080/api/skills/${id}`);
  }

  //Metodos de Proyecto

  getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>('http://localhost:8080/api/proyectos/getAll')
  }

  getProyecto(id: any): Observable<Proyecto>{
    return this.http.get<Proyecto>(`http://localhost:8080/api/proyectos/${id}`)
  }

  createProyecto(formData:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/proyectos/create', formData);
  }

  updateProyecto(formData:any, id:any): Observable<any>{
    return this.http.put(`http://localhost:8080/api/proyectos/${id}`, formData);
  }

  deleteProyecto(id:any): Observable<any>{
    return this.http.delete(`http://localhost:8080/api/proyectos/${id}`);
  }

  login(creds: Credentials){
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) =>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
