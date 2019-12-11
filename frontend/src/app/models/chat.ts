export class Chat {

    constructor(_id = '', contactos = [], mensajes = []) {
        this._id = _id;
        this.contactos = contactos;
        this.mensajes = mensajes;
    }
    _id: string;
    contactos: string[];
    mensajes: string[];
}
