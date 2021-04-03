import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootname = 'Rhuan'
  itemsApp = ['Apples', 'Bananas','Cherries']

  mudandoName(novoName) {
    this.rootname = novoName;
  }

  addingNewItem(addingNewItem){
  this.itemsApp.push(addingNewItem);
  console.log(this.itemsApp)
  }
}
