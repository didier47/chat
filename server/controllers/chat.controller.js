const mongoose = require('mongoose')
const Chat = mongoose.model('Chat', require('../models/chat'))
const Contacto = mongoose.model('Contacto', require('../models/contacto'))

const chatController = {}

chatController.getChats = async (req, res) => {
    const contactos = await Contacto.find({
        _id: {
            $not: {$eq: req.params.id}
        }
    })
    res.json(contactos)
}

chatController.selectChatContacto = async (req, res) => {
    const selectedContacto = await Contacto.findById(req.params.selectedContacto_id)
    const contacto = await Contacto.findById(req.params.contacto_id)
    const chat = await Chat.findOne({ $and:[ {contactos: selectedContacto}, {contactos: contacto} ]})
    if (chat) {
        res.json(chat)
    } else {
        const chat = new Chat({
            contactos: [selectedContacto, contacto],
            mensajes: []
        });
        await chat.save()
        res.json(chat)
    }
}

chatController.enviarMensaje = async (req, res) => {
    const chat = await Chat.findById(req.params.chat_id)
    const contacto = await Contacto.findById(req.params.selectedContacto_id)
    const mensaje = {
        texto: req.body.mensaje,
        fecha: new Date(),
        enviadoPor: contacto
    }
    chat.mensajes.push(mensaje)
    await chat.save()
    res.json(chat)
}

module.exports = chatController