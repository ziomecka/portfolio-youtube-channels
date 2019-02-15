// FILE used to prepare '_results.json'
// to run it type in terminal 'node _create.results'

// the helper has been tested!
// the helper's results can be verified manually in _results.json

// require because I do not babel node
const fs = require( 'fs' );
const path = require( 'path' );

const pathName = '_results.json';
const outputPath = path.resolve( __dirname, pathName );

const data = require( './_data' );
const helper = require( './_helper' );

const results = {
    'f': helper( { pattern: 'f', field: 'title', data } ),
    'google': helper( { pattern: 'google', field: 'title', data } ),
    'oo': helper( { pattern: 'oo', field: 'title', data } ),
    'D*': helper( { pattern: 'D*', field: 'title', data } ),
    'jSCONF': helper( { pattern: 'jsConf', field: 'description', data } ),
    '.': helper( { pattern: '.', field: 'description', data } ),
};

function createFile () {
    fs.writeFileSync( outputPath, JSON.stringify( results, null, 4 ) );
}

module.exports = createFile;

require( 'make-runnable' );
