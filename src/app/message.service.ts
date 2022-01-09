import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chat } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  chats = new BehaviorSubject([] as Chat[]);

  constructor() {
    this.chats.next([
      { me: true, text: 'What happened last night?', time: '7:47 AM' },
      { me: false, text: 'You were drunk.', time: '7:48 AM' },
      { me: true, text: "No I wasn't.", time: '7:48 AM' },
      {
        me: false,
        text: 'You were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!',
        time: '7:49 AM',
      },
    ]);
  }

  getChats() {
    return this.chats;
  }

  send(chat: Chat) {
    this.chats.next([...this.chats.getValue(), chat]);
  }
}
