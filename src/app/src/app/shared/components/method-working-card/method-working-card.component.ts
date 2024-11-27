import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-method-working-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './method-working-card.component.html',
  styleUrl: './method-working-card.component.scss',
})
export class MethodWorkingCardComponent {
  @Input() heading = '';
  @Input() content1 = '';
  @Input() content2 = '';
  @Input() img = '';
  @Input() imgLeft = false;
}
