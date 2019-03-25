import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .colorText {
      color: white;
    }
  `]
})
export class AppComponent {
  
  toggle = false;
  clicks = [];
  clickNum: number = 0;

  onClick() {
    this.toggle = !this.toggle;
    this.clickNum++;
    this.clicks.push(this.clickNum);
  }

}
