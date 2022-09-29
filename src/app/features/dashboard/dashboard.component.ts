import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() logout: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClickLogout(){
    this.logout.emit(true);
  }
}
