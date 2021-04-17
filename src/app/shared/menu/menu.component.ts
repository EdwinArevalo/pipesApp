import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[] = [];

  constructor() { }


  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
             icon: 'pi pi-star',
             items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },{
                    separator:true
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-question',
                    routerLink: 'no-comunes'
                },
             ]
        },
        {
            label: 'Personalizados',
            icon: 'pi pi-pencil',
            routerLink: 'ordenar'
        },
    ];
}

}
