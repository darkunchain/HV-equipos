import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './app_components/welcome/welcome.component';
import { DashboardComponent } from './app_components/dashboard/dashboard.component';

const routes: Routes = [

  {path: 'welcome', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
