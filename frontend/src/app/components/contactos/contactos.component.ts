import { Component, OnInit } from '@angular/core';

import { ContactoService } from '../../services/contacto.service';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [ContactoService]
})
export class ContactosComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.getContactos();
  }

  getContactos() {
    this.contactoService.getContactos()
      .subscribe(res => {
        this.contactoService.contactos = res as Contacto[];
      });
  }

}
