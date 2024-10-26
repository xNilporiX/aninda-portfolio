import { Component, Input } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-project-timeline-card',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './project-timeline-card.component.html',
  styleUrl: './project-timeline-card.component.scss'
})
export class ProjectTimelineCardComponent {
  @Input() title = "";
  @Input() industry = "";
  @Input() summary = "";
  @Input() contributionSummary = "";
  @Input() keyBenefits: string[] = [];
  @Input() badges: string[] = [];
}
