const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const ContactoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = ContactoSchema