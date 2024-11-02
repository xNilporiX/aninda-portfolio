import { Component } from '@angular/core';
import { ProjectTimelineCardComponent } from "./project-timeline-card/project-timeline-card.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectTimelineCardComponent, SkillsComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
