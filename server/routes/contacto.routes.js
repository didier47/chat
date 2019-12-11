const express = require('express')
const router = express.Router()

const contactoController = require('../controllers/contacto.controller')

router.get('/', contactoController.getContactos)
router.post('/', contactoController.crearContacto)

module.exports = router