const express 		= require('express');
const logger 	    = require('morgan');
const bodyParser 	= require('body-parser');
const passport    = require('passport');
const pe          = require('parse-error');
const cors        = require('cors');
const { CronJob } = require('cron');
const path        = require('path');

const CronController 	= require('./services/cron.service');

const debug = require('debug')('server:server');
const http = require('http');

const v1 = require('./routes/v1');
const admin = require('./routes/admin');

const app = express();

const CONFIG = require('./config/config');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(passport.initialize());

// CORS
app.use(cors());

app.use('/v1', v1);
// app.use('/admin', admin);

app.use('/', function(req, res){
  res.statusCode = 200;//send the appropriate status code
  res.json({status:"success", message:"Mongo API", data:{}})
});

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

const port = normalizePort(CONFIG.port || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});


function normalizePort(val) {
  const port = parseInt(val, 10);
  
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  
  if (port >= 0) {
    // port number
    return port;
  }
  
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  
  console.log('Server listenning on port:', addr.port);
  
}

