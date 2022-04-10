const bookModel = require('../models/book.model')


exports.threeBookController = (req, res, next) => {

    bookModel.getThreeBooks().then(books => {
        res.render('index', {
            books: books,
            verifUser: req.session.userId
        })
    })



}


