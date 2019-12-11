const express = require('express')
const router = express.Router()

const chatController = require('../controllers/chat.controller')

router.get('/:id', chatController.getChats)
router.post('/', chatController.selectChatContacto)
router.post('/enviarMensaje', chatController.enviarMensaje)

module.exports = router