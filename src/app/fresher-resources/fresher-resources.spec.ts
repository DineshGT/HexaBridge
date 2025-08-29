import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherResources } from './fresher-resources';

describe('FresherResources', () => {
  let component: FresherResources;
  let fixture: ComponentFixture<FresherResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FresherResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FresherResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
