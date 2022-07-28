const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

// Must be before any app uses
app.use( express.json() );
app.use(express.urlencoded({ extended: true}));

// connect to db using config
require('./server/config/mongoose.config')

// app uses
app.use(cors());
require('./server/routes/product.route')(app);




// Lasst block of code
app.listen(port, () => {
    console.log(`Listening on port: ${ port }`)
})
