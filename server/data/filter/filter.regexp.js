function regexp ( options = {} ) {
    let { pattern } = options;
    const { modifiers = 'gi' } = options;

    if ( ( typeof pattern === 'string' ) ) {
        // if pattern contains point replace it with backslash point
        pattern = pattern.replace( /(\.)/g, '\\$1' );

        // if pattern contains asteriks replace it with empty string
        pattern = pattern.replace( /(\*)/g, '' );

        return new RegExp( `${ pattern }`, modifiers );
    }
}

module.exports = regexp;
