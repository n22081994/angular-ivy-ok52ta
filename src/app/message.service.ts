import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chat } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _chatsSubject = new BehaviorSubject([] as Chat[]);
  private chats$ = this._chatsSubject.asObservable();
  constructor() {
    this._chatsSubject.next([
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
    return this.chats$;
  }

  send(chat: Chat) {
    this._chatsSubject.next([...this._chatsSubject.getValue(), chat]);
  }
}
