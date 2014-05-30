/**
 * Main application script.
 */
var express = require( 'express' ),
	http = require( 'http' ),
	path = require( 'path' ),
	app = express();

// all environments
app.set( 'port', process.env.PORT || 2000 );
app.use( express.logger( 'dev' ) );
app.use( express.urlencoded() );
app.use( express.static( path.join( __dirname, 'src' ) ) );
app.use( '/raw', express.static( path.join( __dirname, '/raw/rbcexpress' ) ) );

http.createServer( app ).listen( app.get( 'port' ), function() {
  console.log( 'Express server listening on port ' + app.get( 'port' ) );
});