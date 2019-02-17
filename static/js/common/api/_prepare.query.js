import getEscapeFunction from '../_get.escape.function';

function prepareApiQuery ( options ) {
    /** Escape special characters like & = / */
    const escape = getEscapeFunction( { variant: 'query' } );

    const getQuery = ( key, value ) => (
        `${ escape( key ) }=${ escape( value ) }`
    );

    return (
        Object.keys( Object( options ) )
            .reduce( ( acc, key, ind ) => {
                const query = getQuery( key, options[key] );

                return (
                    ind
                        ? acc + `&${ query }`
                        : `?${ query }`
                );
            }, '' )
    );
}

export default prepareApiQuery;
