const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


let testRouter = require('./routes/test')

/**
 * API
 */

app.use('/test', testRouter)

// start server
const port = process.env.PORT 
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});