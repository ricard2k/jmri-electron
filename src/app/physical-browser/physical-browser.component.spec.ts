import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalBrowserComponent } from './physical-browser.component';

describe('PhysicalBrowserComponent', () => {
  let component: PhysicalBrowserComponent;
  let fixture: ComponentFixture<PhysicalBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
