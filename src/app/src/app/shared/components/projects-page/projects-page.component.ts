import { Component, OnInit } from '@angular/core';
import { ProjectTimelineCardComponent } from './project-timeline-card/project-timeline-card.component';
import { SkillsComponent } from '../skills/skills.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectTimelineCardComponent, SkillsComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const scrollContainer: HTMLElement | null = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }
}
