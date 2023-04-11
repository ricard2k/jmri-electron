import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { TurnoutsService, Turnout } from '../turnouts.service';
import { TurnoutDialogComponent } from '../turnout-dialog/turnout-dialog.component';

@Component({
  selector: 'app-turnouts',
  templateUrl: './turnouts.component.html',
  styleUrls: ['./turnouts.component.scss']
})

export class TurnoutsComponent implements OnInit {
  data = new MatTableDataSource<Turnout>([]);
  displayedColumns: string[] = ["systemName", "userName", "state", "comment", "inverted", "locked",'actions'];

  constructor(private turnoutsService: TurnoutsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.turnoutsService.getTurnouts().subscribe(
      (response) => {
        this.data.data = response;
        this.data._updateChangeSubscription();
      },
      (error) => {
        console.error('Error fetching turnouts data:', error);
      }
    );
  }

  onButtonClick() {
    const dialogRef = this.dialog.open(TurnoutDialogComponent, {
      width: '450px',
      data: { turnout: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.info('Dialog result:', result);
        this.data.data.push(result);
        this.data._updateChangeSubscription();
      }
    });
  }

  editRow(turnout: Turnout) {
    const dialogRef = this.dialog.open(TurnoutDialogComponent, {
      width: '450px',
      data: { turnout },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.data.data.findIndex(t => t === turnout);
        if (index > -1) {
          this.data.data[index] = result;
          this.data._updateChangeSubscription();
        }
      }
    });
  }

  removeRow(turnout: Turnout) {
    const index = this.data.data.findIndex(t => t === turnout);
    if (index > -1) {
      this.data.data.splice(index, 1);
      this.data._updateChangeSubscription();
    }
  }

}
