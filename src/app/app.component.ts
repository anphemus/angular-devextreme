import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  title = 'angular-devextreme';
  isLogged = false;
  dashboardOn = false;
  perfilOn = false;
  constructor() {

  }
  onSignIn(event:any){
    if(event != ""){
      this.isLogged = true;
      this.username = "@"+event;
    }
  }

  onLogout(){
    this.isLogged = false;
    this.dashboardOn = false;
    this.perfilOn = false;
  }

  onDasboard(){
    this.dashboardOn = true;
    this.perfilOn = false;
  }
  onPerfil(){
    this.perfilOn = true;
    this.dashboardOn= false;
  }

}
