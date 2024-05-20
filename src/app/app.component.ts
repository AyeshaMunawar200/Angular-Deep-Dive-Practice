import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Deep-Dive';
  onLogoClicked() {
    alert('image clicked')
  }
  onKeyUp(inputText: string) {
    this.title = inputText;
  }
}
