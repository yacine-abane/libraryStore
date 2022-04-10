const route = require('express').Router()
const ContactController = require('../controllers/contact.controller')

route.get('/contact', ContactController.getContactPage)


module.exports = route