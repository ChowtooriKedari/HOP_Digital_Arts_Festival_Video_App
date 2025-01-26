import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-video-selection',
  templateUrl: './tutorial-video-selection.component.html',
  styleUrls: ['./tutorial-video-selection.component.scss']
})
export class TutorialVideoSelectionComponent {
  constructor(private router: Router) {}

  skipTutorial() {
    this.router.navigate(['/tutorial-instruction']);
  }
}