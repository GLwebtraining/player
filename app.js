var express = require( 'express' );
var http = require( 'http' );
var path = require( 'path' );
var app = express();

app.set( 'port', process.env.PORT || 2000 );
app.use( express.logger( 'dev' ) );
app.use( express.urlencoded() );
app.use( express.static( path.join( __dirname, '/' ) ) );

http.createServer( app ).listen( 2000, function() {
	console.log( 'Server is running' );
} );