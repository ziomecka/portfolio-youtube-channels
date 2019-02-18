// FILE used to prepare '_create.results'
// to run it type in terminal 'node _results.json'

// the helper has been tested!
// the helper's results can be verified manually in _results.json

// require because I do not babel node
const fs = require( 'fs' );
const path = require( 'path' );

const pathName = '_results.json';
const outputPath = path.resolve( __dirname, pathName );

const data = require( './_data' );
const helper = require( './_helper' ).helper;

const results = {
    titleAsc: helper( { data, fields: ['title'], directions: ['asc'] } ),
    titleDesc: helper( { data, fields: ['title'], directions: ['desc'] } ),
    subscriberCountDesc: helper( { data, fields: ['statistics.subscriberCount'], directions: ['desc'] } ),
    viewCountAsc: helper( { data, fields: ['statistics.viewCount'], directions: ['asc'] } ),
};

function createFile () {
    fs.writeFileSync( outputPath, JSON.stringify( results, null, 4 ) );
}

module.exports = createFile;

require( 'make-runnable' );
