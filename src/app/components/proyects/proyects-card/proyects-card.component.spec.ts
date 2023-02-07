import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsCardComponent } from './proyects-card.component';

describe('ProyectsCardComponent', () => {
  let component: ProyectsCardComponent;
  let fixture: ComponentFixture<ProyectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
