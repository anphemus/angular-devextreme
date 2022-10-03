import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  jsonUrl1 = 'https://jsonplaceholder.typicode.com/posts';
  jsonUrl2 = '../../../assets/json/employees.json';
  constructor() {

  }

  ngOnInit(): void {

  }

}
