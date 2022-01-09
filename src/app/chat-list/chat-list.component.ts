import { Component, OnInit } from '@angular/core';

interface Message {
  me: boolean;
  text: string;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chats: Message[] = [
    { me: true, text: 'What happened last night?' },
    { me: false, text: 'You were drunk.' },
    { me: true, text: "No I wasn't." },
    {
      me: false,
      text: 'You were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
