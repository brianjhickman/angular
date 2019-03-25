import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: '<h2>The operation failed!</h2>',
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
