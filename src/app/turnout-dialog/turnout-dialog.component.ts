import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Turnout } from '../turnouts.service';
import { MatLabel, MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-turnout-dialog',
  templateUrl: './turnout-dialog.component.html',
  styleUrls: ['./turnout-dialog.component.scss']
})

export class TurnoutDialogComponent {
  @Input() turnout: Turnout;

  constructor(
    public dialogRef: MatDialogRef<TurnoutDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { turnout: Turnout }
  ) {
    this.turnout = data.turnout ? { ...data.turnout } : {
      systemName: '',
      userName: '',
      state: '',
      comment: '',
      inverted: false,
      locked: false,
    };
   }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.turnout);
  }

}
