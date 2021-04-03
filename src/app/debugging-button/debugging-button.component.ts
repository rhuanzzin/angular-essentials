import { Component } from '@angular/core';
import { random } from 'lodash'; //importanto library javascript

@Component({
  selector: 'app-debugging-button',
  templateUrl: './debugging-button.component.html'
})
export class DebuggingButtonComponent{

  number = 1;
  randomNumber = 0;

  duplicandoNumero() {
  this.number = this.number * 2;
  }
  randomizandoNumero() {
    this.randomNumber = random(1,100)
  }
}
