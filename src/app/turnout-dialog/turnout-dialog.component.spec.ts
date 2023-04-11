import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoutDialogComponent } from './turnout-dialog.component';

describe('TurnoutDialogComponent', () => {
  let component: TurnoutDialogComponent;
  let fixture: ComponentFixture<TurnoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
