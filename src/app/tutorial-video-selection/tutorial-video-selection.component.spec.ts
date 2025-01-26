import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialVideoSelectionComponent } from './tutorial-video-selection.component';

describe('TutorialVideoSelectionComponent', () => {
  let component: TutorialVideoSelectionComponent;
  let fixture: ComponentFixture<TutorialVideoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialVideoSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialVideoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
