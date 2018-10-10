// import express and middleware modules
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import * as db from './database/sync';

// import routes modules
import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
db.sync();

// set path
app.use(express.static(path.join(__dirname, 'public')));

// set route
app.use('/', routes);

app.get('*', (req, res) => {
  res.render('index');
});

module.exports = app;
