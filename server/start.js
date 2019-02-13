require( 'dotenv' ).config();
const path = require( 'path' );

const Koa = require( 'koa' );
const koaStatic = require( 'koa-static' );
const getPort = require( 'get-port' );
const router = require( './router' );

async function runServer () {
    const port = await getPort( { port: 3000 } );

    const dir = process.env.NODE_ENV === 'production'
        ? 'bundleProd'
        : 'bundleDev';

    const app = new Koa();
    app.use( koaStatic( path.join( __dirname, '..', dir ) ) );
    app.use( router );
    app.listen( port );

    /* eslint-disable no-console */
    console.log( `server started at http://localhost:${port}/` );
    /* eslint-enable no-console */
}

/* eslint-disable no-console */
runServer().catch( console.error );
/* eslint-enable no-console */
