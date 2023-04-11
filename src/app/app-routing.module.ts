import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnoutsComponent } from './turnouts/turnouts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'turnouts', component: TurnoutsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
