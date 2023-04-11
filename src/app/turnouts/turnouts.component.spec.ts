import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoutsComponent } from './turnouts.component';

describe('TurnoutsComponent', () => {
  let component: TurnoutsComponent;
  let fixture: ComponentFixture<TurnoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
