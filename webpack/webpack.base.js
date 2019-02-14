const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

const html = new HtmlWebpackPlugin( {
    template: path.resolve( __dirname, '../static/index.html' ),
} );

module.exports = {
    entry: {
        app: path.resolve( __dirname, '../static/js/index.js' ),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        html,
    ],
    resolve: {
        alias: {
            '@constants': ( path.resolve( __dirname, '../static/js/constants' ) ),
            '@common': ( path.resolve( __dirname, '../static/js/common/' ) ),
        },
    },
};
