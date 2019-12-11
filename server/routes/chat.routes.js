const express = require('express')
const router = express.Router()

const chatController = require('../controllers/chat.controller')

router.get('/:id', chatController.getChats)
router.get('/:selectedContacto_id/:contacto_id', chatController.selectChatContacto)
router.post('/:selectedContacto_id/enviarMensaje/:chat_id', chatController.enviarMensaje)

module.exports = router