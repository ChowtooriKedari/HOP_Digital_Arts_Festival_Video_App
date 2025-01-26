import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-instruction',
  templateUrl: './tutorial-instruction.component.html',
  styleUrls: ['./tutorial-instruction.component.scss']
})
export class TutorialInstructionComponent {
  constructor(private router: Router) {}

  skipInstruction() {
    this.router.navigate(['/home']);
  }

  goToNext() {
    this.router.navigate(['/home']);
  }
}