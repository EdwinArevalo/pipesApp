import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent, 
    BasicsComponent, 
    OrderingComponent,
    MayusculasPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent, 
    BasicsComponent, 
    OrderingComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
