import { Component, Input, Output, EventEmitter, } from '@angular/core';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent{
  @Input() items = [''];
  @Output() addNewItem = new EventEmitter<string>();

  novoItem = '';

  onButtonClick(){
    this.addNewItem.emit(this.novoItem);
  }

  }

