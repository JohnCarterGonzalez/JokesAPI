const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
	useNewUrlParser: true, 
	useUnifiedTopology: true
})

	.then(() => console.log('Green light connection to DB'))
	.catch(err => console.log('Connection error to the database', err));

