import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-devextreme';
  isLogged = false;

  constructor() {

  }
  onSignIn(){
    this.isLogged = true;
  }
  onLogout(){
    this.isLogged = false;
  }
}
