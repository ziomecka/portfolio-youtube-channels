const getUUID = require( 'uuid/v1' );

function getSecret () {
    return getUUID();
}

module.exports = getSecret;
