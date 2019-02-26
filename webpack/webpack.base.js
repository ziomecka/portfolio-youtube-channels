const alias = require( './alias' );
const copySvgFiles = require( './copy.svg.files' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const path = require( 'path' );

const svgFiles = copySvgFiles( { to: 'svg/' } );

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
    node: {
        fs: 'empty',  // to remove the error "can't resolve fs" which
        // is displayed when unit tests are run
        // the error results from using dotenv in server files
    },
    plugins: [
        extractCss,
        html,
        optimizeCss,
        svgFiles,
    ],
    resolve: {
        alias,
    },
};
