function helper ( options ) {
    const { func, args } = options;

    try {
        func( ...args );
    } catch ( err ) {
        return true;
    }

    return false;
}

function doesError ( options ) {
    const {
        func,
        types = [],
    } = options;

    let result = true;

    if ( typeof func !== 'function' ) {
        throw Error( '' );
    }

    if ( !Array.isArray( types ) ) {
        throw Error( '' );
    }

    /* eslint-disable no-fallthrough */
    switch ( true ) {
    case types.includes( 'object' ): {
        result = result && helper( { func, args: [{}, {}] } );
    }

    case types.includes( 'function' ): {
        result = result && helper( { func, args: [() => {}, () => {}] } );
    }

    case types.includes( 'boolean' ): {
        result = result && helper( { func, args: [true, true] } );
    }

    case types.includes( 'number' ): {
        result = result && helper( { func, args: [1, 1] } );
    }

    case types.includes( 'string' ): {
        result = result && helper( { func, args: ['a', 'a'] } );
        break;
    }

    default: {
        return result;
    }
    }
    /* eslint-enable no-fallthrough */
}

module.exports = doesError;
