import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { OrderingComponent } from './sales/pages/ordering/ordering.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumbersComponent,
  },
  {
    path: 'no-comunes',
    component: NotCommonsComponent,
  },
  {
    path: 'ordenar',
    component: OrderingComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        useHash: true
      }
    )
  ]
})
export class AppRouterModule { }
