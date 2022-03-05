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

  nosotros : string = 'Edwin'

  ngOnInit(): void {
  }


  heroes: Hero[] = [
    {
      name:'Edwin',
      color: Color.azul,
      vuela: true
    },
    {
      name:'Edwin 2',
      color: Color.negro,
      vuela: true
    },
    {
      name:'Edwin 4',
      color: Color.rojo,
      vuela: false
    },
  ]

}
