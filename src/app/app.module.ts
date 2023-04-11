import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { PhysicalBrowserComponent } from './physical-browser/physical-browser.component';
import { PanelEditorComponent } from './panel-editor/panel-editor.component';
import { LogicalEditorComponent } from './logical-editor/logical-editor.component';
import { AutomationBrowserComponent } from './automation-browser/automation-browser.component';
import { EntityBrowserComponent } from './entity-browser/entity-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    PhysicalBrowserComponent,
    PanelEditorComponent,
    LogicalEditorComponent,
    AutomationBrowserComponent,
    EntityBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
