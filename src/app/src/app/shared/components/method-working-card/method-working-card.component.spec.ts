import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodWorkingCardComponent } from './method-working-card.component';

describe('MethodWorkingCardComponent', () => {
  let component: MethodWorkingCardComponent;
  let fixture: ComponentFixture<MethodWorkingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodWorkingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodWorkingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
