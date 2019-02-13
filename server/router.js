const { URLS } = require( './constants' );

const getChannels = require('./router/').getChannels;

const router = require( 'koa-router' )();

router.get( URLS.channels, getChannels );

module.exports = router.routes();
