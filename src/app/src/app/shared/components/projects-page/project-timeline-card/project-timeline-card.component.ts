import { Component, Input } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BadgeComponent } from "../../badge/badge.component";
@Component({
  selector: 'app-project-timeline-card',
  standalone: true,
  imports: [CdkAccordionModule, BadgeComponent],
  templateUrl: './project-timeline-card.component.html',
  styleUrl: './project-timeline-card.component.scss'
})
export class ProjectTimelineCardComponent {
  @Input() title = "";
  @Input() industry = "";
  @Input() summary = "";
  @Input() company = "";
  @Input() contributionSummary = "";
  @Input() keyBenefits: string[] = [];
  @Input() badges: string[] = [];
  @Input() lessonsLearned? = '';
}
