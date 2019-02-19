const { URLS } = require( './constants' );

const getChannels = require( './router/' ).getChannels;
const filterChannels = require( './router/' ).filterChannels;
const sortChannels = require( './router/' ).sortChannels;

const router = require( 'koa-router' )();

router.get( URLS.channels, getChannels );
router.get( URLS.filterChannels, filterChannels );
router.get( URLS.sortChannels, sortChannels );

module.exports = router.routes();
