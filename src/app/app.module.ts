import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgChartsModule} from "ng2-charts";
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../service/dataService";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { NavbarComponent } from './navbar/navbar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: 'chart', component: AppComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ChartLineComponent,
    HomeComponent,
    PageNotFoundComponent,
    TemperatureComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormControl,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
