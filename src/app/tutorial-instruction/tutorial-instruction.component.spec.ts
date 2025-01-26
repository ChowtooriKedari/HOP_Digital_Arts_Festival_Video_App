import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialInstructionComponent } from './tutorial-instruction.component';

describe('TutorialInstructionComponent', () => {
  let component: TutorialInstructionComponent;
  let fixture: ComponentFixture<TutorialInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
