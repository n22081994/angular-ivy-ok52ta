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
      { me: false, text: 'Narendra', time: '7:47 AM' },
      { me: true, text: 'Ji Papa', time: '7:48 AM' },
      { me: false, text: 'Kese ho ', time: '7:48 AM' },
      { me: true, text: 'Me Accha hu .. aap kese hai', time: '7:48 AM' },
      {
        me: false,
        text: 'Thik hu. mummy ne bataya ki aapki girl friend hai. kab se jante ho ?',
        time: '7:49 AM',
      },
      {
        me: true,
        text: 'Ji papa ... saal bhar se janta hu',
        time: '7:50 AM',
      },
      {
        me: false,
        text: 'Kaun hai, kya karti hai, family kesi hai. aapko pata hai kal se 20-25 rishtedaro ke call aa gye hai. aapko pehle muje batana chahiye tha',
        time: '7:51 AM',
      },
      {
        me: true,
        text: 'Ginny naam hai, Rajput hai, medical field me hai, kaphi acchi family se hai... papa muje usi se shaadi karni hai ... me next month aa rha hu ... aap pls nanaji ko tab tak mana lijiye ',
        time: '7:52 AM',
      },
      {
        me: false,
        text: 'Thik hai me baat karta hu.wo kaphi gussa kar rhe the. call karo muje 10 min me',
        time: '7:52 AM',
      },
      {
        me: true,
        text: 'Thik hai 10 min me call karta hu',
        time: '7:53 AM',
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
