import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialExampleModule} from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { PhysicalBrowserComponent } from './physical-browser/physical-browser.component';
import { PanelEditorComponent } from './panel-editor/panel-editor.component';
import { LogicalEditorComponent } from './logical-editor/logical-editor.component';
import { AutomationBrowserComponent } from './automation-browser/automation-browser.component';
import { EntityBrowserComponent } from './entity-browser/entity-browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
