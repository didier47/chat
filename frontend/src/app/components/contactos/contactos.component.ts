import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ChatsComponent } from '../chats/chats.component';
import { ContactoService } from '../../services/contacto.service';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [ContactoService]
})
export class ContactosComponent implements OnInit, AfterViewInit {

  @ViewChild(ChatsComponent, { static: false }) chatComponent: ChatsComponent;

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.getContactos();
  }

  ngAfterViewInit() {

  }

  selectContacto(contacto: Contacto) {
    this.contactoService.selectedContacto = contacto;
    if (this.chatComponent) {
      this.chatComponent.getChats();
      this.chatComponent.resetSelectedChat();
    }
  }

  addContacto(form?: NgForm) {
    this.contactoService.postContacto(form.value)
      .subscribe(res => {
        this.getContactos();
        this.resetForm(form);
      });
  }

  getContactos() {
    this.contactoService.getContactos()
      .subscribe(res => {
        this.contactoService.contactos = res as Contacto[];
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactoService.contactoToCreate = new Contacto();
    }
  }

}
