import { Component } from '@angular/core';
import { SkillListItemComponent } from '../skill-list-item/skill-list-item.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillListItemComponent, CdkAccordionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
