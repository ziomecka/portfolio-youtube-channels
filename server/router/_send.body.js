async function sendBody ( options ) {
    await options.next();
    options.ctx.body = options.body;
}

module.exports = sendBody;
