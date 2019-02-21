const { CONFIG } = require( './constants' );

const getSecret = require( './get.secret' );
const readSession = require( './read' );

/* simplified session middleware */
async function session ( ctx, next, cookies = CONFIG ) {

    const { key, ...other } = cookies;

    const session = readSession( ctx );

    if ( !session ) {
        ctx.cookies.set( key, getSecret(), other );
    }

    await next();
}

module.exports = session;
