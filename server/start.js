require( 'dotenv' ).config();
const path = require( 'path' );

const Koa = require( 'koa' );
const koaStatic = require( 'koa-static' );
const router = require( './router' );

async function runServer () {
    const PORT = process.env.NODE_ENV === 'production'
        ? process.env.PORT
        : 3000;

    const dir = process.env.NODE_ENV === 'production'
        ? path.resolve( __dirname, '../bundleProd/' )
        : path.resolve( __dirname, '../bundleDev/' );

    /* eslint-disable no-console */
    console.log( `Static files are served from: ${ dir }` );
    /* eslint-enable no-console */

    const app = new Koa();

    app.use( koaStatic( dir ) );
    app.use( router );
    app.listen( PORT );

    /* eslint-disable no-console */
    console.log( `server started at ${ PORT }` );
    /* eslint-enable no-console */
}

/* eslint-disable no-console */
runServer().catch( console.error );
/* eslint-enable no-console */
