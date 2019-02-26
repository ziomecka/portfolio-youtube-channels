function filterRegexp ( pattern, modifiers = 'gi' ) {
    if ( typeof pattern === 'string' ) {
        // if pattern contains point replace it with backslash point
        pattern = pattern.replace( /(\.)/g, '\\$1' );

        // if pattern contains asteriks replace it with empty string
        pattern = pattern.replace( /(\*)/g, '' );

        return new RegExp( `${ pattern }`, modifiers );
    }
}

// module.exports because I do not babel-node in tests and I use node and lodash to create expected results
module.exports = filterRegexp;
