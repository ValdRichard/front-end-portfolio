import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartUpdateComponent } from './first-part-update.component';

describe('FirstPartUpdateComponent', () => {
  let component: FirstPartUpdateComponent;
  let fixture: ComponentFixture<FirstPartUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPartUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPartUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
