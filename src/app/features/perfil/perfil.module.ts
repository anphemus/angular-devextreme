import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { perfilComponent } from './perfil.component';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';




@NgModule({

  declarations: [
    perfilComponent
  ],
  imports: [
    CommonModule,
    DxFormModule,
    DxButtonModule,
  ],exports: [perfilComponent]
})
export class perfilModule { }
