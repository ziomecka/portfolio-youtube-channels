const path = require( 'path' );

const Koa = require( 'koa' );
const koaStatic = require( 'koa-static' );
const getPort = require( 'get-port' );

async function runServer () {
    const port = await getPort( { port: 3000 } );

    const app = new Koa();

    const dir = process.env.NODE_ENV === 'production'
        ? 'bundleProd'
        : 'bundleDev';

    app.use( koaStatic( path.join( __dirname, '..', dir ) ) );
    app.listen( port );

    console.log( `server started at http://localhost:${port}/` ); // eslint-disable-line
}

runServer().catch( console.error ); // eslint-disable-line
