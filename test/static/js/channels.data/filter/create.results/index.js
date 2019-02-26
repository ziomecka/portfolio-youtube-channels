// FILE used to prepare '_results.json'
// to run it type in terminal 'node index.js'

// require because I do not babel node
const fs = require( 'fs' );
const path = require( 'path' );

const pathName = '../_results.json';
const outputPath = path.resolve( __dirname, pathName );

const data = require( '../_data' );
const createResults = require( './_filter.create.results' );

const results = {
    'f': createResults( data, 'f', 'title' ),
    'google': createResults( data, 'google', 'title' ),
    'oo': createResults( data, 'oo', 'title' ),
    'D*': createResults( data, 'D*', 'title' ),
    'jSCONF': createResults( data, 'jsConf', 'description' ),
    '.': createResults( data, '.', 'description' ),
};

function createFile () {
    fs.writeFileSync( outputPath, JSON.stringify( results, null, 4 ) );
}

module.exports = createFile;

require( 'make-runnable' );
