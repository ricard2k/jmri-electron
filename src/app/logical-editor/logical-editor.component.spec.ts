import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalEditorComponent } from './logical-editor.component';

describe('LogicalEditorComponent', () => {
  let component: LogicalEditorComponent;
  let fixture: ComponentFixture<LogicalEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
