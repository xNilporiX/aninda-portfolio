import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() title: string = '';
  @Input() companyLink: string = '';
  @Input() summary: string = '';
  @Input() badges: string[] = [];
  @Input() timeWorked: string = '';
  @Input() latest?: boolean = false;
}
