const bookModel = require('../models/book.model')


exports.getAddBookController = (req, res, next) => {
    res.render('addbook', {verifUser: req.session.userId})
}



exports.postAddBookController = (req, res, next) => {
    console.log(req.body)
    console.log(req.file.filename)
    // bookModel.postDataBookModel(req.body.title, req.body.description, req.body.author, req.body.price, req.file.filename, req.session.userId).then((msg) => {
    //     req.flash('Successmessage',msg)
    //     res.redirect('/addbook')
    // }).catch((err)=>{
    //     req.flash('Errormessage',err)
    //     res.redirect('/addbook')
    // })
}


