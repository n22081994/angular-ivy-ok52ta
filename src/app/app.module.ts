import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [AppComponent, ChatListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
