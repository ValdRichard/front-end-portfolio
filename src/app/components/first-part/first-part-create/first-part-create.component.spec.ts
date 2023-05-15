import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartCreateComponent } from './first-part-create.component';

describe('FirstPartCreateComponent', () => {
  let component: FirstPartCreateComponent;
  let fixture: ComponentFixture<FirstPartCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPartCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
