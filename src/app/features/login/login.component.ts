import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') user: any;
  @Output() login = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.user.value.toString());
  }


  loginClick(){
    this.login.emit(this.user.value.toString());
  }

}
