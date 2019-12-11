import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

import { Chat } from '../models/chat';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  selectedChat: Chat;
  mensaje: String;
  contactosChat: Contacto[];

  readonly URL_API = 'http://localhost:3000/api/chats';

  constructor(private http: HttpClient) {
    this.selectedChat = new Chat();
    this.mensaje = '';
  }

  getChats(_id: String) {
    return this.http.get(this.URL_API + '/' + _id);
  }

  getChat(selectedContacto: Contacto, contacto: Contacto) {
    return this.http.get(this.URL_API + '/' + selectedContacto._id + '/' + contacto._id);
  }

  postMensaje(selectedContacto: Contacto, chat: Chat, mensaje: String) {
    return this.http.post(this.URL_API + '/' + selectedContacto._id + '/enviarMensaje/' + chat._id, mensaje);
  }

}
