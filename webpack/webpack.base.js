const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const path = require( 'path' );

const optimizeCss = new OptimizeCssAssetsPlugin( {
    assetNameRegExp: /\.css$/,
    cssProcessor: require( 'cssnano' ),
    cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true,
} );

const extractCss = new ExtractTextPlugin( 'index.css' );

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
                test: /\.js$/,
                exclude: /node_modules|test|server/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: path.resolve( __dirname, 'postcss.config' ),
                                },
                            },
                        },
                    ],
                } ),
            },
        ],
    },
    plugins: [
        extractCss,
        html,
        optimizeCss,
    ],
    resolve: {
        alias: {
            '@constants': ( path.resolve( __dirname, '../static/js/constants' ) ),
            '@common': ( path.resolve( __dirname, '../static/js/common/' ) ),
            '@channels': ( path.resolve( __dirname, '../static/js/channels/' ) ),
            // @server only for testing - karma bundling
            '@server': ( path.resolve( __dirname, '../server/data/' ) ),
        },
    },
};
