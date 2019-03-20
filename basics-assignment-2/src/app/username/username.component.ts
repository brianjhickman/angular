import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  onResetUsername() {
    this.username = '';
  }

}
