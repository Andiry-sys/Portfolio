import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayForJobComponent } from './pay-for-job.component';

describe('PayForJobComponent', () => {
  let component: PayForJobComponent;
  let fixture: ComponentFixture<PayForJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayForJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
