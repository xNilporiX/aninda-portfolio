import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimelineCardComponent } from './project-timeline-card.component';

describe('ProjectTimelineCardComponent', () => {
  let component: ProjectTimelineCardComponent;
  let fixture: ComponentFixture<ProjectTimelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTimelineCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectTimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
