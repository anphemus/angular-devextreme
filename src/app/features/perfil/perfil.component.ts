import { NotExpr } from '@angular/compiler';
import {  Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class perfilComponent implements OnInit {
  perfil: {
    name: string,
    lastname:string,
    position: string,
    date: Date,
    hireDate: Date,
    address: string,
    notes:string,
    phone: number,
    email: string,
  };

  constructor() {
    this.perfil = {
      name: 'Andrés Felipe',
      lastname: 'Mosquera Rengifo',
      position: 'Desarrollador web',
      date: new Date('9/17/1999'),
      hireDate: new Date('9/26/2022'),
      address: 'Cll 77C #85-21, Bello horizonte.',
      notes: '',
      phone: 3217717345,
      email: 'andresm.rengifo@gmail.com'
    }
  }

  ngOnInit(): void {
    console.log('hello');
  }



}
