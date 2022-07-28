

const express = require('express')

const port = 8000;
const db_name = 'jokes'

const connectToDbCallback = require('./config/mongoose.config')
connectToDbCallback(db_name);

const app = express()

app.use(express.json());

const addJokeRoutesCallback = require('./routes/jokes.routes');
addJokeRoutesCallback(app);

app.listen(port, () => (console.log(`Listening on port ${port} for Requests and Respond to`)))