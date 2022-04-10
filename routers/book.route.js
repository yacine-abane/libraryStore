const bookController = require('../controllers/book.controller')
const route = require('express').Router()
const GuardAuth = require('./guardAuth')



route.get('/', GuardAuth.isAuth, bookController.getAllBookController)
route.get('/:id', GuardAuth.isAuth, bookController.getOneBookDetailsController)




module.exports = route