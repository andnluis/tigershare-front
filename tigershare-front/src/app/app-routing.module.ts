import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { PricesComponent } from './prices/prices.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WorkAreaComponent } from './work-area/work-area.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sing-up', component: SignUpComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'log-in', component: LogInComponent, children:[]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'work-area', component: WorkAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
