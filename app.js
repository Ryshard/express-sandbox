console.log('Hello From App Oku');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);
*/

// Templating engine - EJS
app.set('view engine', 'ejs');

// Setup views folder
app.set('views', path.join(__dirname, 'views'));



// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// Static Folder Setup
app.use( express.static( path.join(__dirname, 'public' )));

var vikings = [
{
	name: 'Biorn',
	age: 27
},
{
	name: 'Hitsvick',
	age: 22
},
{
	name: 'Ubbe',
	age: 55
}
]


app.get('/', function( req, res ){
		res.status(200).send(vikings);

});



app.listen(4000, function(){
	console.log('Server started on Port: 4000 . . . . .');
});