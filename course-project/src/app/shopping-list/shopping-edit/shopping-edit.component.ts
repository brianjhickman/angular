import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  newIngredient: Ingredient;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addValues(nameInput, amountInput) {
    this.newIngredient = new Ingredient(nameInput.value, amountInput.value);
    this.ingredientAdded.emit(this.newIngredient);
  }

}
