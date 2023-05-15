import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsUpdateComponent } from './proyects-update.component';

describe('ProyectsUpdateComponent', () => {
  let component: ProyectsUpdateComponent;
  let fixture: ComponentFixture<ProyectsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
