const mongoose = require('mongoose')
const Contacto = mongoose.model('Contacto', require('../models/contacto'))

const contactoController = {}

contactoController.getContactos = async (req, res) => {
    const contactos = await Contacto.find()
    res.json(contactos)
}

contactoController.crearContacto = async (req, res) => {
    const contacto = new Contacto({
        nombre: req.body.nombre,
    });
    await contacto.save();
    res.json({status: 'Contacto creado'});
}

contactoController.selectContacto = async (req, res) => {
    const contacto = await Contacto.findById(req.params.id)
    res.json(contacto)
}

module.exports = contactoController