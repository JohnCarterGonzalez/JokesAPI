const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema( {
	joke: {
		type: String
	}
});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
