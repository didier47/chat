export class Contacto {

    constructor(_id = '', nombre = '') {
        this._id = _id;
        this.nombre = nombre;
    }
    _id: string;
    nombre: string;
}
