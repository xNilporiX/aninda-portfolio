import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-list-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-list-item.component.html',
  styleUrl: './skill-list-item.component.scss',
})
export class SkillListItemComponent {
  @Input() text = '';
}
