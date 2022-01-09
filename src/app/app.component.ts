import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg = '';
  constructor(private chatService: MessageService) {}
  send() {
    if (this.msg !== '')
      this.chatService.send({
        me: true,
        text: this.msg,
        time: this.formatAMPM(),
      });
    this.msg = '';
  }

  receive() {
    if (this.msg !== '')
      this.chatService.send({
        me: false,
        text: this.msg,
        time: this.formatAMPM(),
      });
    this.msg = '';
  }

  formatAMPM() {
    const date = new Date();
    var hours = date.getHours();
    let minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const min = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + min + ' ' + ampm;
    return strTime;
  }
}
