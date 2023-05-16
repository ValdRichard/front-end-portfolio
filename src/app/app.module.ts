import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstPartComponent } from './components/first-part/first-part.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { EducationUpdateComponent } from './components/education/education-update/education-update.component';
import { ExperienceUpdateComponent } from './components/experience/experience-update/experience-update.component';
import { FirstPartUpdateComponent } from './components/first-part/first-part-update/first-part-update.component';
import { SkillsUpdateComponent } from './components/skills/skills-update/skills-update.component';
import { ProyectsUpdateComponent } from './components/proyects/proyects-update/proyects-update.component';
import { ProyectsCreateComponent } from './components/proyects/proyects-create/proyects-create.component';
import { ExperienceCreateComponent } from './components/experience/experience-create/experience-create.component';
import { EducationCreateComponent } from './components/education/education-create/education-create.component';
import { SkillsCreateComponent } from './components/skills/skills-create/skills-create.component';
import { FirstPartCreateComponent } from './components/first-part/first-part-create/first-part-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPartComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProyectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    EducationUpdateComponent,
    EducationCreateComponent,
    ExperienceUpdateComponent,
    FirstPartUpdateComponent,
    ProyectsUpdateComponent,
    ProyectsCreateComponent,
    ExperienceCreateComponent,
    SkillsCreateComponent,
    SkillsUpdateComponent,
    FirstPartCreateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

