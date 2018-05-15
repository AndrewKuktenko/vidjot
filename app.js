const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

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
})