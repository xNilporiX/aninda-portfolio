import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  open = false;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    // Listen for clicks outside the navbar
    this.renderer.listen('window', 'click', (event: Event) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.open = false; // Close the navbar if the click is outside
      }
    });
  }

  toggle() {
    this.open = !this.open;
  }

  /**
   * Navigates to the home page.
   */
  navToHome() {
    this.router.navigate(['/']).then(() => {
      this.open = false; // Close the sidebar after navigation
      const val = document.getElementById('default-sidebar');
      val?.classList.remove('transform-none');
      // val?.classList.remove('transition-transform');
      // val?.removeAttribute('role: dialog');
      this.cdr.detectChanges(); // Trigger manual change detection

    });
  }

  /**
   * Navigates to the Projects page.
   */
  navToProjects() {
    this.router.navigate(['/projects']).then(() => {
      this.open = false; // Close the sidebar after navigation
    });
  }
}
