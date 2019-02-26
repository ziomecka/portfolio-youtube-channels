function convertNumbers ( number, separator = ',' ) {
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
