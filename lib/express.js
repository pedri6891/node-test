const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const helmet = require('helmet');
const logger = require('morgan');
const minifyHTML = require('express-minify-html');
const compression = require('compression');
const minify = require('express-minify');
const sessionStorage = require('connect-mongo')(expressSession);
const cors = require('cors')

require('events').EventEmitter.prototype._maxListeners = 0;


let configExpress = app => {

  app.locals.pretty = true;

  app.set('views', path.join(__dirname, './../views'));
  app.set('view engine', 'pug');
  app.use(compression());
  app.use(minify());
  app.use(helmet());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json({extended: true}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, './../public')));
  //app.use(cors())
  app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  }));
  app.use(expressSession({
    name: 'sid',
    secret: global.config.super_key,
    // store: new sessionStorage({
    //   url: global.config.mongoUrl
    // }),
    cookie: {
      httpOnly: true
      /** poner atributos de la cookie */
    },
    saveUninitialized: false,
    resave: false,
  }));

};

module.exports = configExpress;
