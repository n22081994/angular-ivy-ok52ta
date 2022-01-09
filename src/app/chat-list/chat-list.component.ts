import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chats$: Observable<Chat[]>;
  constructor(private chatService: MessageService) {
    this.chats$ = this.chatService.getChats();
  }

  ngOnInit() {}
}
