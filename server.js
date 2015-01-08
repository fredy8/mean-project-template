var express = require('express'),
	credentials = require('./server/credentials'),
	bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);

var dbConnectionString = credentials.mongo[app.get('env')].connectionString;
var MongoSessionStore = require('session-mongoose')(require('connect'));
var sessionStore = new MongoSessionStore({ url: dbConnectionString });

var server;
app.use(require('./server/error-shutdown')(5000, server));
// app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'));

if (app.get('env') === 'development') {
	app.use(require('morgan')('dev'));
} else if (app.get('env') === 'production') {
	var logPath = __dirname + '/log/requests.log';
	app.use(require('express-logger')({ path: logPath }));
}

app.use(require('compression')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({
	store: sessionStore,
	secret: credentials.cookieSecret,
	resave: false,
	saveUninitialized: true
}));
app.use(require('csurf')());
require('./server/serve-static')(app);

app.use('/api', require('./api/routes/main'));
require('./server/error-handlers')(app);

var startServer = function () {
	require('mongoose').connect(dbConnectionString, {
		server: { socketOptions: { keepAlive: 1 } }
	}, function () {
		server = require('http').createServer(app).listen(app.get('port'),
			function () {
				console.log('Server started.');
			}
		);
	});
};

if (app.get('env') === 'development') {
	console.log('Starting server in %s mode on port %d', app.get('env'),
			app.get('port'));
	startServer();
} else if (app.get('env') === 'production') {
	require('./server/cluster-launcher.js')(startServer, function () {
		console.log('Starting server in %s mode on port %d', app.get('env'),
			app.get('port'));
	});
}

