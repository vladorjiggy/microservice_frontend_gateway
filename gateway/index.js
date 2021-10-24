const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();


/**
 * EVTL CORS
 */
/*
let allowedDomains = apphost;
app.use(cors({
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);
 
    if (allowedDomains.indexOf(origin) === -1) {
      let msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
*/

// start server
const port = process.env.PORT 
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});