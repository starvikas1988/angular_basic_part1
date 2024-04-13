import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';
  newServerType = '';

  onAddServer() {
    this.serverElements.push({
      type: this.newServerType,
      name: this.newServerName,
      content: this.newServerContent
    });
    console.log('Server Elements:', this.serverElements);
  }
}
