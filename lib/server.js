'use strict';

const express = require('express');
const methodOverride = require('method-override');

const routes = require('./routes.js');

const app = express();

app.set('view engine', 'ejs');

//  middleware

app.use(express.urlencoded({extended: true}));
app.use( methodOverride( (req, res) => {
  if( req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//  static methods

app.use( express.static('./public') );

//  Dynamic Routes

app.use(routes);

module.exports = {
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, console.log('now listening on port:  ', PORT));
  },
};