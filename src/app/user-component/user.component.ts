import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
  selector: 'app-user',
  template: `
  <div class=content>
  <input type="text" (input)="onUserInput($event)" [value]="name"> <!--input que roda o onUserInput, alterando o "name" -->
  <!-- <input type="text" [(ngModel)]="name"> --> <!-- input utilizando ngModel -->
  <p>Olá, {{name}}!</p>
  <p>Eu sou o User Component!</p>
  <app-user-detail></app-user-detail>
  </div>
  `,
  styleUrls: ['../app.component.css']
})
export class UserComponent {
  @Input() name;
  @Output() mudarName = new EventEmitter<string>(); //setando mudarName como um emissor (@output() ... EventEmitter) e esperando receber uma string (<string>)

//#####################
//Typescripts vão abaixo
//#####################

  onUserInput(event) {
    // this.name = event.target.value;
    this.mudarName.emit(event.target.value); //emitindo oq o usuário escreve via EventEmitter utilizando o mudarName, que é um output (decorator)
    }
}

