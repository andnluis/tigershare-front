import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PricesComponent } from './prices/prices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkAreaComponent } from './work-area/work-area.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    SignUpComponent,
    LogInComponent,
    PricesComponent,
    DashboardComponent,
    WorkAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    MonacoEditorModule.forRoot()
  ],
  providers: [],//para los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
