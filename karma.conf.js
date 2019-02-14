const webpack = require( './webpack/webpack.dev' );

module.exports = config => {
    config.set( {
        basePath: './',
        frameworks: ['browserify', 'jasmine'],
        files: [
            'test/**/*spec.js',
            { pattern: 'static/js/**/*.js', included: false },
            { pattern: 'server/data/*.js', included: false },
            { pattern: 'node_modules/**/*.js', included: false },
        ],
        exclude: [
            'node_modules/*',
        ],
        preprocessors: {
            'test/**/*.js': ['webpack'],
            'static/js/**/*.js': ['webpack'],
            'server/data/*.js': ['webpack', 'browserify'],
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'Firefox'],
        singleRun: false,
        concurrency: Infinity,
        hooks: [
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-webpack',
        ],
        webpack,
        browserify: {
            debug: false,
        },
    } );
};
