import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  selectedContacto: Contacto;
  contactoToCreate: Contacto;
  contactos: Contacto[];
  readonly URL_API = 'http://localhost:3000/api/contactos';

  constructor(private http: HttpClient) {
    this.selectedContacto = new Contacto();
    this.contactoToCreate = new Contacto();
  }

  getContactos() {
    return this.http.get(this.URL_API);
  }

  postContacto(contacto: Contacto) {
    return this.http.post(this.URL_API, contacto);
  }

}
