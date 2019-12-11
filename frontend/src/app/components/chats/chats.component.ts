import { Component, OnInit, Input } from '@angular/core';

import { ContactoService } from '../../services/contacto.service';
import { ChatService } from '../../services/chat.service';
import { NgForm } from '@angular/forms';
import { Chat } from 'src/app/models/chat';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
  providers: [ChatService]
})
export class ChatsComponent implements OnInit {

  @Input() contactoService: ContactoService;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats(this.contactoService.selectedContacto._id)
      .subscribe(res => {
        this.chatService.contactosChat = res as Contacto[];
      });
  }

  selectChatContacto(contacto: Contacto) {
    this.chatService.getChat(this.contactoService.selectedContacto, contacto)
      .subscribe(res => {
        this.chatService.selectedChat = res as Chat;
      });
  }

  enviarMensaje(form?: NgForm) {
    this.chatService.postMensaje(this.contactoService.selectedContacto, this.chatService.selectedChat, form.value)
      .subscribe(res => {
        this.chatService.selectedChat = res as Chat;
        this.resetForm(form);
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactoService.contactoToCreate = new Contacto();
    }
  }

  resetSelectedChat() {
    this.chatService.selectedChat = new Chat();
  }

}
