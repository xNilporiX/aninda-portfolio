import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { ChatPopoverComponent } from "./shared/components/chat-popover/chat-popover.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CommonModule, ChatPopoverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor() {}
  cursorX: number = 0;
  cursorY: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
