import { Component } from '@angular/core';

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard-component.css']
})
export class DashboardComponent {
  title ='Componente Dashboard Incrível';
  loadState = 'Carregando...';

//#####################
//Typescripts vão abaixo
//#####################

Concluir (){
    this.loadState = 'Concluído!';
  }

  Resetar (){
    this.loadState = 'Carregando...';
  }
 }

