const { URLS } = require( './constants' );

const getChannels = require('./router/').getChannels;
const filterChannels = require( './router/' ).filterChannels;

const router = require( 'koa-router' )();

router.get( URLS.channels, getChannels );
router.get( URLS.filterChannels, filterChannels );

module.exports = router.routes();
