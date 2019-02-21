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

    const app = new Koa();
    if ( process.env.LOG ) {
        console.log( `Static files are served from: ${ dir }` ); // eslint-disable-line
    }

    app.use( koaStatic( dir ) );
    app.use( router );
    app.listen( PORT );

    console.log( `server started at ${ PORT }` ); // eslint-disable-line
}

runServer().catch( console.error ); // eslint-disable-line
