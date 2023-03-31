import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHuiospayComponent } from './why-huiospay.component';

describe('WhyHuiospayComponent', () => {
  let component: WhyHuiospayComponent;
  let fixture: ComponentFixture<WhyHuiospayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyHuiospayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyHuiospayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
