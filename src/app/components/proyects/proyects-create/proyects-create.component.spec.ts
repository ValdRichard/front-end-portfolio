import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsCreateComponent } from './proyects-create.component';

describe('ProyectsCreateComponent', () => {
  let component: ProyectsCreateComponent;
  let fixture: ComponentFixture<ProyectsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
