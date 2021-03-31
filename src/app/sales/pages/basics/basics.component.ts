import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{
 
  nameLower: string = 'edwin';
  nameUpper: string = 'EDWIN';
  nameComplete: string = 'edWiN WilLiaM';

  date: Date = new Date();
}
