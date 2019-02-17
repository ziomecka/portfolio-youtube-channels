function getProperty ( options ) {
    const { arr, obj } = options;

    if ( !Array.isArray( arr ) || !arr[0] ) {
        return obj;
    }

    return getProperty( { obj: obj[arr[0]], arr: arr.slice( 1 ) } );
}

module.exports = getProperty;
