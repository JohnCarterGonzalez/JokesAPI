const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('./routes/jokes.routes');
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("We are a green light on poert 8000"));
