const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// start server
const port = process.env.PORT 
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});