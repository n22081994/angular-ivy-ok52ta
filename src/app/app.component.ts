import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg = '';
  time = this.getTime(true);
  source = timer(1000);
  constructor(private chatService: MessageService) {
    const subscribe = this.source.subscribe(
      (val) => (this.time = this.getTime(false))
    );
  }

  send() {
    this.addMsg(true);
  }

  receive() {
    this.addMsg(false);
  }

  addMsg(myMsg: boolean) {
    if (this.msg !== '') {
      this.chatService.send({
        me: myMsg,
        text: this.msg,
        time: this.getTime(true),
      });
      this.msg = '';
    }
  }

  getTime(withAMPM: boolean) {
    const date = new Date();
    var hours = date.getHours();
    let minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const min = minutes < 10 ? '0' + minutes : minutes;
    return withAMPM ? hours + ':' + min : hours + ':' + min + ' ' + ampm;
  }
}
