import { Component } from '@angular/core';
import { ProjectTimelineCardComponent } from "./project-timeline-card/project-timeline-card.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectTimelineCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
