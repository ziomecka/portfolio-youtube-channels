// FILE used to prepare '_create.results'
// to run it type in terminal 'node _results.json'

// require because I do not babel node
const fs = require( 'fs' );
const path = require( 'path' );

const pathName = '../_results.json';
const outputPath = path.resolve( __dirname, pathName );

const data = require( '../_data' );
const { createResults } = require( './_sort.create.results' );

const results = {
    titleAsc: createResults( data, ['title'], ['asc'] ),
    titleDesc: createResults( data, ['title'], ['desc'] ),
    subscriberCountDesc: createResults( data, ['statistics.subscriberCount'], ['desc'] ),
    viewCountAsc: createResults( data, ['statistics.viewCount'], ['asc'] ),
};

function createFile () {
    fs.writeFileSync( outputPath, JSON.stringify( results, null, 4 ) );
}

module.exports = createFile;

require( 'make-runnable' );
