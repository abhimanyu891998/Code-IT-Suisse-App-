
require('babel-register')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var square = require('./routes/square').default;
var imagesGPS = require('./routes/imagesGPS').default;
var primeSum = require('./routes/primesum').default;
var airtrafficcontroller = require('./routes/airtrafficcontroller').default;
var deeplearning = require('./routes/deeplearning').default;
var customersAndHotel = require('./routes/customerandhotel').default;
var tallyExpense = require('./routes/tally-expense').default;
var broadcaster = require('./routes/broadcaster').default;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/square', square)
app.use('/imagesGPS', imagesGPS)
app.use('/prime-sum',primeSum)
app.use('/airtrafficcontroller',airtrafficcontroller)
app.use('/machine-learning',deeplearning)
app.use('/customers-and-hotel',customersAndHotel)
app.use('/tally-expense',tallyExpense)
app.use('/broadcaster', broadcaster)

// catch 404 and forward to error handler`
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
