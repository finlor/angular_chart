import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartLineComponent} from "./components/chart-line/chart-line.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: '', component: NavbarComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'temperature', component: ChartLineComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
