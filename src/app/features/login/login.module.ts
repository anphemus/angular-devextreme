import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DxTextBoxModule, DxValidatorModule, DxButtonModule} from 'devextreme-angular';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
