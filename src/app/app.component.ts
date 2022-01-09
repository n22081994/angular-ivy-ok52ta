import { Component, VERSION } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private chatService: MessageService) {}
  send() {
    this.chatService.send({ me: false, text: 'H', time: '12:00 AM' });
  }
}
