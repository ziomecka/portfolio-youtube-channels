import { COMMON_ERRORS } from './constants';

/**
 *
 * @param {string} number
 * @param {separator} string  optional: , || . (comma  || point), default is , (comma)
 * @returns string | undefined
 */
function convertNumbers ( number, separator = ',' ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        if ( ( typeof number !== 'string' ) || ( Number.isNaN( Number( number ) ) ) ) {
            /* eslint-disable no-console */
            console.warn( `convertNumbers: ${ COMMON_ERRORS.get( 'convert_numbers_not_number' ) }` );
            /* eslint-enable no-console */
            return undefined;
        }

        if ( ( separator !== ',' ) && ( separator !== '.' ) ) {
            /* eslint-disable no-console */
            console.warn( `convertNumbers: ${ COMMON_ERRORS.get( 'argument_incorrect' ) }` );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    // Assumed - number is a stringified positive integer
    if ( ( typeof number === 'string' ) && ( !Number.isNaN( Number( number ) ) ) ) {
        const { length } = number;

        /**
         * if number longer then 3 digit then
         * insert comma between 10^3 groups (the US/British notation))
         * else return number
         * */
        if ( length > 3 ) {
            let result = '';

            // find first digits that do not belong to any 10^3 group
            const modulo = length % 3;

            if ( modulo ) {
                result += `${ number.substring( 0, modulo ) }${ separator }`;
            }

            // in case of remaining digits: replace each 10^3 group with: 'the group' + 'separator'
            result += number.substring( modulo )
                .replace( /(\d{3})(?=\d+)/g, letters => `${letters}${ separator }` );

            return result;
        } else {
            return number;
        }
    }
}

export default convertNumbers;
