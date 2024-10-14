import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperienceListComponent } from './display-experience.component';

describe('HomeExperienceListComponent', () => {
  let component: HomeExperienceListComponent;
  let fixture: ComponentFixture<HomeExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExperienceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
