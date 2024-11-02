import { Component } from '@angular/core';
import { SkillListItemComponent } from "../skill-list-item/skill-list-item.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillListItemComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
