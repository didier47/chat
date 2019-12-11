const mongoose = require('mongoose')
const {
    Schema
} = mongoose
const ContactoSchema = require('./contacto')

const ChatSchema = new Schema({
    contactos: [ContactoSchema],
    mensajes: [{
        texto: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        },
        enviadoPor: ContactoSchema
    }]
})

module.exports = ChatSchema