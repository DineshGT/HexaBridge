import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTrackerComponent } from './placement-tracker';

describe('PlacementTracker', () => {
  let component: PlacementTracker;
  let fixture: ComponentFixture<PlacementTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
