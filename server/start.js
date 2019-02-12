const path = require( 'path' );

const Koa = require( 'koa' );
const koaStatic = require( 'koa-static' );
const getPort = require( 'get-port' );

async function runServer () {
    const port = await getPort( { port: 3000 } );

    const app = new Koa();
    app.use( koaStatic( path.join( __dirname, '..', 'static' ) ) );
    app.listen( port );

    /* eslint-disable no-console */
    console.log( `server started at http://localhost:${port}/` );
    /* eslint-enable no-console */
}

/* eslint-disable no-console */
runServer().catch( console.error );
/* eslint-enable no-console */
