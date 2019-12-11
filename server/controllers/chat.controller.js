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
    const chat = await Chat.findOne({
        'contactos': {
            $in: [req.body.selectedContacto, req.body.contacto]
        }
    })
    if (chat) {
        res.json(chat)
    } else {
        const chat = new Chat({
            contactos: [req.body.selectedContacto, req.body.contacto],
            mensajes: []
        });
        await chat.save()
        res.json(chat)
    }
}

chatController.enviarMensaje = async (req, res) => {
    const chat = await Chat.findById(req.body.selectedChat_id)
    const mensaje = {
        texto: req.body.texto,
        fecha: new Date(),
        enviadoPor: req.body.selectedContacto
    }
    chat.mensajes.push(mensaje)
    await chat.save()
    res.json(chat)
}

module.exports = chatController