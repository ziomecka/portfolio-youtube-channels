const CopyPlugin = require( 'copy-webpack-plugin' );
const path = require( 'path' );

function copySvgFiles ( options ) {
    const {
        flatten = true,
        from = path.join( path.resolve( __dirname, '../static/svg/' ), '**/*.svg' ),
        to,
    } = options;

    return new CopyPlugin( [{ flatten, from, to }] );
}

module.exports = copySvgFiles;
