import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { perfilModule } from './features/perfil/perfil.module';
import { LoginModule } from './features/login/login.module';
import { DxDataGridModule } from 'devextreme-angular';

//components
import { AppComponent } from './app.component';
import { BarChartComponent } from './features/bar-chart/bar-chart.component';
import { BarGraphComponent } from './features/bar-graph/bar-graph.component';
import { DatagridComponent } from './features/datagrid/datagrid.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BarGraphComponent,
    DatagridComponent,
  ],
  imports: [
    BrowserModule,
    perfilModule,
    LoginModule,
    DxDataGridModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
