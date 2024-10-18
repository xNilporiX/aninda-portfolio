import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesComponent } from './dad-jokes.component';

describe('DadJokesComponent', () => {
  let component: DadJokesComponent;
  let fixture: ComponentFixture<DadJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadJokesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
