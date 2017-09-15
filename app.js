var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors=require('cors');

var index = require('./routes/index');
var follow = require('./routes/follow');
var detail = require('./routes/detail');
var more = require('./routes/more');
/*var cookies = require('./routes/cookies');*/

var app = express();
app.use(cors({
  "origin": ['http://localhost:8080'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:['Content-Type', 'Authorization'],
  credentials:true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  keys:['aa','bb'],
  name:'sess_id',
  maxAge:1000*60
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/follow', follow);
app.use('/index', index);
app.use('/detail', detail);
app.use('/more', more);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});



module.exports = app;
