import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from "../socials/socials.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, SocialsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  open = false;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // Listen for clicks outside the navbar
    this.renderer.listen('window', 'click', (event: Event) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.open = false; // Close the navbar if the click is outside
      }
    });
  }

  /**
   * Closes the menu
   */
  closeMenu(): void {
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  /**
   * Navigaes to the home page.
   */
  navToHome() {
    this.router.navigate(['/']);
    this.open = false;
  }

  /**
   * Navigates to the Projects page.
   */
  navToProjects() {
    this.router.navigate(['/projects']);
    this.open = false;
  }
}
