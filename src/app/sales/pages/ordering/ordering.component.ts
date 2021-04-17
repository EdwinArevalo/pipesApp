import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styles: [
  ]
})
export class OrderingComponent implements OnInit {

  constructor() { }

  nosotros : string = 'eWaS'

  ngOnInit(): void {
  }


  heroes: Hero[] = [
    {
      name:'Ewas',
      color: Color.azul,
      vuela: true
    },
    {
      name:'Ewas 2',
      color: Color.negro,
      vuela: true
    },
    {
      name:'Ewas 4',
      color: Color.rojo,
      vuela: false
    },
  ]

}
