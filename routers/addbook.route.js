const route = require('express').Router()
const addbookController = require('../controllers/addbook.controller')
const GuardAuth = require('./guardAuth')
const multer = require('multer')


route.get('/addbook',GuardAuth.isAuth,addbookController.getAddBookController)
route.post('/addbook',multer({
storage:multer.diskStorage({
    destination:function (req, file, cb) {
            cb(null, 'assets/uploads')  
      },
    filename:function (req, file, cb) {
            cb(null, Date.now()+ file.originalname )      
    }
})
}).single('image'),
GuardAuth.isAuth,addbookController.postAddBookController)


module.exports = route