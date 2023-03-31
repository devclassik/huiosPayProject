import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySectionComponent } from './overlay-section.component';

describe('OverlaySectionComponent', () => {
  let component: OverlaySectionComponent;
  let fixture: ComponentFixture<OverlaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
