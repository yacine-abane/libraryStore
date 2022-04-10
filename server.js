const express = require('express')
const path = require('path')
const RouterHome = require('./routers/home.route')
const RouterBook = require('./routers/book.route')
const RouterAuth = require('./routers/auth.route')
const RouterAbout = require('./routers/about.route')
const RouterContact = require('./routers/contact.route')
const RouterAddbook = require('./routers/addbook.route')
const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')




const app = express()






app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine', 'ejs')
app.set('views','views')


var Store = new MongoDbStore({
    uri: 'mongodb://localhost:27017/library',
    collection: 'sessions'
})
app.use(flash())
app.use(session({
    secret: 'this is my secret key',
    store: Store,
    resave: true,
    saveUninitialized: true
}))


app.use('/', RouterHome)
app.use('/books', RouterBook)
app.use('/', RouterAuth)
app.use('/', RouterAbout)
app.use('/', RouterContact)
app.use('/', RouterAddbook)

// app.get('/addbook' , (req,res) => {
//     res.render('addbook', {verifUser: req.session.userId})
// })


// app.get('/contact', (reg,res,next)=>{
//     res.render('contact')
// })

// app.get('/about', (reg,res,next)=>{
//     res.render('about')
// })

// app.get('/books', (req,res,next)=> {
//     res.render('books')
// })

// app.get('/login', (req,res,next) => {
//     res.render('login')
// })

// app.get('/register', (req,res,next) => {
//     res.render('register')
// })

app.listen(3000,()=> console.log('server run on port 3000'))