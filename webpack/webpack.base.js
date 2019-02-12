const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

const html = new HtmlWebpackPlugin( {
    template: path.resolve( __dirname, '../static/index.html' ),
} );

module.exports = {
    entry: {
        app: path.resolve( __dirname, '../static/js/index.js' ),
    },
    plugins: [
        html,
    ],
};
