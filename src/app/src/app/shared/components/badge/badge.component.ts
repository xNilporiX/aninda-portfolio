import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent implements OnChanges {
  @Input() icon = '';
  @Input() text = '';
  iconUrl = '';

  ngOnChanges(): void {
    this.iconUrl = `../../../../assets/icons/${this.icon}`;
  }
}
