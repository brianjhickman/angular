import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navbarClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesClick() {
    this.navbarClicked.emit('recipes');
  }

  onShoppingListClick() {
    this.navbarClicked.emit('shoppingList');
  }

}
