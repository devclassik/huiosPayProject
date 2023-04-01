import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersOverlaySectionComponent } from './developers-overlay-section.component';

describe('DevelopersOverlaySectionComponent', () => {
  let component: DevelopersOverlaySectionComponent;
  let fixture: ComponentFixture<DevelopersOverlaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersOverlaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopersOverlaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
