async function sendBody ( options ) {
    const { ctx, next, body } = Object( options );

    try {
        await next();
        ctx.body = body;
    } catch ( err ) {
        /* eslint-disable no-console */
        console.warn( `koa error: ${ err.message || err.toString() }` );
        /* eslint-enable no-console */
    }
}

module.exports = sendBody;
