import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { PhysicalBrowserComponent } from './physical-browser/physical-browser.component';
import { PanelEditorComponent } from './panel-editor/panel-editor.component';
import { LogicalEditorComponent } from './logical-editor/logical-editor.component';
import { AutomationBrowserComponent } from './automation-browser/automation-browser.component';
import { EntityBrowserComponent } from './entity-browser/entity-browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TurnoutsComponent } from './turnouts/turnouts.component';
import { HomeComponent } from './home/home.component';
import { TurnoutDialogComponent } from './turnout-dialog/turnout-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    PhysicalBrowserComponent,
    PanelEditorComponent,
    LogicalEditorComponent,
    AutomationBrowserComponent,
    EntityBrowserComponent,
    TurnoutsComponent,
    HomeComponent,
    TurnoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
