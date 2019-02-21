function errorHandler ( err ) {
    console.warn( `koa error: ${ err.message || err.toString() }` ); // eslint-disable-line
}

module.exports = errorHandler;
