const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

//Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
	.then(() => console.log('MongoDB connected...'))
	.catch((error) => console.log(error));

//Load Idea Module
require('./models/Idea')

const Idea = mongoose.model('ideas');

app.engine('handlebars', exphbs({
	defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

//index route
app.get('/', (req,res) => {
	const title = "Welcome!"
	res.render('index', {title: title});
});

//about
app.get('/about',(req, res)=> {
	res.render('about');
})

const port = 5000;

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});

