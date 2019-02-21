const { CONFIG } = require( './constants' );

function read ( ctx ) {
    return ctx.cookies.get( CONFIG.key );
}

module.exports = read;
