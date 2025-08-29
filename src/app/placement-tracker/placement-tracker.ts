import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-placement-tracker',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatButtonModule, MatProgressBarModule],
  template: `
    <div class="tracker-container">
      <h1>Placement Progress Tracker</h1>
      <p class="subtitle">Follow your journey with Hexaware 🚀</p>

      <!-- Progress Bar -->
      <div class="progress-wrapper">
        <mat-progress-bar mode="determinate" [value]="progress"></mat-progress-bar>
        <span>{{ completedSteps }} / {{ steps.length }} completed</span>
      </div>

      <!-- Stepper -->
      <mat-vertical-stepper [linear]="false" #stepper>
        <ng-container *ngFor="let step of steps; let i = index">
          <mat-step [completed]="step.done">
            <ng-template matStepLabel>{{ step.label }}</ng-template>
            <div class="step-content">
              <p>{{ step.action }}</p>
              <div class="actions">
                <!-- Stage 1: Start Task -->
                <button mat-raised-button color="primary" (click)="startTask(i)" *ngIf="!step.started && !step.done">
                  Start Task
                </button>

                <!-- Stage 2: Mark as Done -->
                <button mat-raised-button color="accent" (click)="markAsDone(i)" *ngIf="step.started && !step.done">
                  Mark as Done
                </button>

                <!-- After Done: Next Step -->
                <button mat-raised-button color="primary" (click)="stepper.next()" *ngIf="i < steps.length - 1 && step.done">
                  Next Step
                </button>
              </div>
            </div>
          </mat-step>
        </ng-container>
      </mat-vertical-stepper>

      <!-- Congrats Card -->
      <div *ngIf="progress === 100" class="congrats-card">
        🎉 Congratulations! You have successfully completed all steps and secured your placement at Hexaware!
      </div>
    </div>
  `,
  styles: [`
    .tracker-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 8px;
      color: #1a237e;
      text-align: center;
    }

    .subtitle {
      font-size: 16px;
      color: #555;
      margin-bottom: 20px;
      text-align: center;
    }

    .progress-wrapper {
      margin: 20px 0 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    mat-progress-bar {
      width: 100%;
      height: 8px;
      border-radius: 4px;
    }

    .progress-wrapper span {
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }

    .step-content {
      margin: 15px 0;
      font-size: 15px;
    }

    .step-content p {
      margin-bottom: 12px;
      font-weight: 500;
      color: #444;
    }

    .actions {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }

    .congrats-card {
      margin-top: 30px;
      padding: 20px;
      text-align: center;
      background: #e8f5e9;
      border: 1px solid #66bb6a;
      border-radius: 12px;
      font-weight: 600;
      color: #2e7d32;
      font-size: 18px;
    }
  `]
})
export class PlacementTrackerComponent {
  steps = [
    { label: 'Submit Application', action: 'Upload your resume and apply for Hexaware.', done: false, started: false },
    { label: 'Aptitude Test', action: 'Take the online test to assess your logical & technical skills.', done: false, started: false },
    { label: 'Technical Interview', action: 'Attend the technical interview with our panel.', done: false, started: false },
    { label: 'HR Interview', action: 'Discuss culture fit, salary, and expectations.', done: false, started: false },
    { label: 'Offer Letter', action: 'Receive and accept your offer letter.', done: false, started: false },
    { label: 'Onboarding', action: 'Complete documentation and join Hexaware.', done: false, started: false }
  ];

  startTask(stepIndex: number) {
    this.steps[stepIndex].started = true;
  }

  markAsDone(stepIndex: number) {
    this.steps[stepIndex].done = true;
  }

  get completedSteps(): number {
    return this.steps.filter(s => s.done).length;
  }

  get progress(): number {
    return (this.completedSteps / this.steps.length) * 100;
  }
}
