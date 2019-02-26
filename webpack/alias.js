const path = require( 'path' );

module.exports = {
    '@channelsData': ( path.resolve( __dirname, '../static/js/channels.data' ) ),
    '@channelsEvents': ( path.resolve( __dirname, '../static/js/channels.events' ) ),
    '@channelsLoad': ( path.resolve( __dirname, '../static/js/channels.load' ) ),
    '@common': ( path.resolve( __dirname, '../static/js/common/' ) ),
    '@constants': ( path.resolve( __dirname, '../static/js/constants' ) ),
};
