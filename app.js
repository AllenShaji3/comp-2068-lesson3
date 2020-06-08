const express = require('express');
const app = express();

const path = require('path');

//Setting view directory

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Registering our routing

const routes = require('./routes.js');
app.use('/', routes);

app.listen(process.env.PORT || 3000, port => console.log
(`Listening on port ${port}`));