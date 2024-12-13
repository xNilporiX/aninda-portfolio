import { Component, OnInit } from '@angular/core';
import { ProjectTimelineCardComponent } from './project-timeline-card/project-timeline-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectTimelineCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent implements OnInit {
  id = '0';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '0';
  }

  ngOnInit(): void {
    const scrollContainer: HTMLElement | null =
      this.id === '0' ? document.getElementById('scroll-container') : null;
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
    this.id !== '1'
      ? this.scrollToElement(this.id)
      : this.scrollToElement1(this.id);
  }

  private scrollToElement1(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }

  private scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  }
}
