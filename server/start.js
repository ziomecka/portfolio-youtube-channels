require( 'dotenv' ).config();

const Koa = require( 'koa' );
const errorHandler = require( './error.handler/' );
const koaStatic = require( 'koa-static' );
const path = require( 'path' );
const router = require( './router' );

async function runServer () {

    const isProduction = process.env.NODE_ENV === 'production';

    const app = new Koa();

    app.on( 'error',  errorHandler );

    const dir = isProduction
        ? path.resolve( __dirname, '../bundleProd/' )
        : path.resolve( __dirname, '../bundleDev/' );

    if ( process.env.LOG ) {
        console.log( `Static files are served from: ${ dir }` ); // eslint-disable-line
    }

    app.use( koaStatic( dir ) );
    app.use( router );

    const PORT = isProduction
        ? process.env.PORT
        : 3000;

    app.listen( PORT );

    console.log( `server started at ${ PORT }` ); // eslint-disable-line
}

runServer().catch( console.error ); // eslint-disable-line
