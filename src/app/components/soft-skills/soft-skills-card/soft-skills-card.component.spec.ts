import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsCardComponent } from './soft-skills-card.component';

describe('SoftSkillsCardComponent', () => {
  let component: SoftSkillsCardComponent;
  let fixture: ComponentFixture<SoftSkillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
