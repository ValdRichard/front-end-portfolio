import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstPartComponent } from './components/first-part/first-part.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceCardComponent } from './components/experience/experience-card/experience-card.component';
import { EducationCardComponent } from './components/education/education-card/education-card.component';
import { SoftSkillsCardComponent } from './components/soft-skills/soft-skills-card/soft-skills-card.component';
import { ProyectsCardComponent } from './components/proyects/proyects-card/proyects-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstPartComponent,
    ExperienceComponent,
    EducationComponent,
    SoftSkillsComponent,
    ProyectsComponent,
    FooterComponent,
    ExperienceCardComponent,
    EducationCardComponent,
    SoftSkillsCardComponent,
    ProyectsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
