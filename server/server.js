const express = require('express');
const app = espress();

require('../config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('./routes/joke.routes');
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("We are a green light on poert 8000"));
