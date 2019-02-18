/* eslint-disable no-useless-escape */
function getEscapeFunction ( options ) {
    const {
        variant = 'query',
    } = Object( options );

    const variants =  {
        query: '[=&\/]',
    };

    if ( !Object.keys( variants ).includes( variant ) ) {
        throw new Error( 'getEscapeFunction: variant is incorrect' );
    }

    const regexp = variants[variant];
    const replacer = '\\$&';
    const modifiers = 'gi';

    return (
        ( str ) => {
            if ( typeof str !== 'string' ) {
                throw new Error( 'escape: not a valid string' );
            }

            return str.replace( new RegExp( regexp, modifiers ), replacer );
            // return str.replace( new RegExp( '[=]', modifiers ), '\\$1' );
        }
    );
}

export default getEscapeFunction;
