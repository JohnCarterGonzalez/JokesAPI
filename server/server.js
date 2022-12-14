const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const MyJokeRoutes = require('./routes/jokes.routes');
MyJokeRoutes(app);

app.listen(8000, () => console.log("We are a green light on port 8000"));
