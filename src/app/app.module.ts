import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { perfilModule } from './features/perfil/perfil.module';
import { LoginModule } from './features/login/login.module';
//components

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BarChartComponent } from './features/bar-chart/bar-chart.component';
import { BarGraphComponent } from './features/bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartComponent,
    BarGraphComponent,
  ],
  imports: [
    BrowserModule,
    perfilModule,
    LoginModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
