import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingAssistant } from './onboarding-assistant';

describe('OnboardingAssistant', () => {
  let component: OnboardingAssistant;
  let fixture: ComponentFixture<OnboardingAssistant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingAssistant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingAssistant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
