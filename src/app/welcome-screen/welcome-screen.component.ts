import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
  constructor(private router: Router) {}

  goToNext() {
    this.router.navigate(['/tutorial-video-selection']);
  }

  @HostListener('window:touchmove', ['$event'])
  handleTouchMove(event: TouchEvent) {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      const startX = 0;
      const currentX = touch.clientX;
      if (currentX - startX > 50) {
        this.goToNext();
      }
    }
  }
}