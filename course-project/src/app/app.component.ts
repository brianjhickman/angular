import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clickValue: string = 'recipes';

  onNavbarClicked(navbarClick: string) {
    this.clickValue = navbarClick;
  }

}
