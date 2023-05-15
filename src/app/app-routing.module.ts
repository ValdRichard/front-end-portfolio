import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

import { FirstPartUpdateComponent } from './components/first-part/first-part-update/first-part-update.component';

import { EducationCreateComponent } from './components/education/education-create/education-create.component';
import { EducationUpdateComponent } from './components/education/education-update/education-update.component';

import { ExperienceCreateComponent } from './components/experience/experience-create/experience-create.component';
import { ExperienceUpdateComponent } from './components/experience/experience-update/experience-update.component';

import { ProyectsCreateComponent } from './components/proyects/proyects-create/proyects-create.component';
import { ProyectsUpdateComponent } from './components/proyects/proyects-update/proyects-update.component';

import { SkillsCreateComponent } from './components/skills/skills-create/skills-create.component';
import { SkillsUpdateComponent } from './components/skills/skills-update/skills-update.component';
import { FirstPartCreateComponent } from './components/first-part/first-part-create/first-part-create.component';

const routes: Routes = [
  { path: 'portfolio', component:PortfolioComponent, canActivate: [AuthGuard]},
  
  //Persona
  { path: 'personaCrear', component:FirstPartCreateComponent, canActivate: [AuthGuard]},
  { path: 'personaEdit/:id', component:FirstPartUpdateComponent, canActivate: [AuthGuard]},

  //Educacion
  { path: 'educacionCrear', component:EducationCreateComponent, canActivate: [AuthGuard]},
  { path: 'educacionEdit/:id', component:EducationUpdateComponent, canActivate: [AuthGuard]},

  //Experiencia
  { path: 'experienciaCrear', component:ExperienceCreateComponent, canActivate: [AuthGuard]},
  { path: 'experienciaEdit/:id', component:ExperienceUpdateComponent, canActivate: [AuthGuard]},

  //Proyecto
  { path: 'proyectoCrear', component:ProyectsCreateComponent, canActivate: [AuthGuard]},
  { path: 'proyectoEdit/:id', component:ProyectsUpdateComponent, canActivate: [AuthGuard]},

  //Skill
  { path: 'skillCrear', component:SkillsCreateComponent, canActivate: [AuthGuard]},
  { path: 'skillEdit/:id', component:SkillsUpdateComponent, canActivate: [AuthGuard]},

  //Login
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 