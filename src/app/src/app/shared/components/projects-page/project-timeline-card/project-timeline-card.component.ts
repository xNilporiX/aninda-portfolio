import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-timeline-card',
  standalone: true,
  imports: [],
  templateUrl: './project-timeline-card.component.html',
  styleUrl: './project-timeline-card.component.scss'
})
export class ProjectTimelineCardComponent {
  @Input() title = "";
  @Input() summary = "";
  @Input() contributionSummary = "";
  @Input() keyBenefits: string[] = [];
}
