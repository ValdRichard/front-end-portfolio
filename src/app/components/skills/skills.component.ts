import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Skill } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills?: Skill[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.apiService.getSkills()
      .subscribe(skill =>{
        this.skills = skill;
      })
  }
  
  
  eliminar(id: any): void{
    this.apiService.deleteSkill(id)
      .subscribe(data=>{
        window.location.reload();
      })
  }
}
