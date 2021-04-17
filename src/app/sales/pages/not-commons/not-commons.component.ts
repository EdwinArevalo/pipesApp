import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  name: string = 'Susana';
  gender: string = 'femenino';
  joinMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clients: string[] = ['Edwin','William','Jperez'];
  clientsCountMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  changeName() {
    this.name = 'Edwin';
    this.gender = 'masculino';
  }

  addClient(){
    this.clients.push('Ewas');
  }

  deleteClient(){
    this.clients.pop();
  }

  person = {
    name: 'edwin',
    age: 19,
    address: 'Lima, Perú'
  }


  myObservable =  interval(1000);
  
}
