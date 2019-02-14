/**
 *
 * @param {Object} options
 * @param {string} options.url
 * @param {boolean} options.http  should url start with http(s)? optional, default = true
 * @returns Boolean | undefined
 */
function isValidUrl ( options ) {
    const { url, http = true } = Object( options );

    if ( typeof url === 'string' ) {
        /* eslint-disable no-useless-escape */
        const httpRegexp = 'http(s)?:\/\/';
        const commonRegexp = '[-_=a-z0-9:\/\.]';

        const modifiers = 'gi';

        const regexp = http
            ? new RegExp( `^${ httpRegexp }${ commonRegexp }+$`, modifiers )
            : new RegExp( `^\/(${ commonRegexp })+$`, modifiers );
        /* eslint-enable no-useless-escape */

        return regexp.test( url );
    }
}

export default isValidUrl;
