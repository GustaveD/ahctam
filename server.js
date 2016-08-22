let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')
let app = express()

//MOTEUR DE TEMPLATE
app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'nimportequoi',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(require('./middlewares/flash'))

//ROUTES
app.get('/', (request, response) => {
	console.log(request.session)
	response.render('pages/index')
})

app.post('/', (request, response) => {
	if (request.body.message === undefined || request.body.message === ''){
		request.flash('error', "Vous n'avez pas poste de message")
		response.redirect('/')
	}
	else {
		let Message = require('./models/message')
		Message.dbug(request.body.message)
		response.redirect('/')
		/*Message.create(request.body.message, function(){
			request.flash('success', "Merci!")
			response.redirect('/')
		})*/

	}
	
})

app.listen(3000)