const base = require( './webpack.base' );
const merge = require( 'webpack-merge' );
const path = require( 'path' );

module.exports = merge( base, {
    mode: 'development',
    output: {
        path: path.resolve( __dirname, '../bundleDev/' ),
    },
} );
