import {
    api,
    isValidUrl,
} from '@common';

import loadChannels from '../_load.channels';

function listener ( options ) {
    const {
        direction,
        field,
        root,
        url,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            ( direction !== 'asc' && direction !== 'desc' ) ||
            !root ||
            typeof root !== 'string' ||
            !isValidUrl( { url, http: false } )
        ) {
            /* eslint-disable no-console */
            console.warn( 'sortChannels listener: incorrect arguments' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    return async ( value ) => {
        /**
         * if radio button has been selected
         * then get data
         * else do nothing
         */
        if ( value === 'on' ) {
            try {
                const data = await api.get( {
                    url,
                    queries: { [field]: direction },
                } );

                loadChannels( {
                    root,
                    data,
                    removeChannels: true,
                } );
            } catch ( err ) {
                if ( process.env.NODE_ENV !== 'production' ) {
                    /* eslint-disable no-console */
                    console.log( err );
                    /* eslint-enable no-console */
                }

                return undefined;
                // TODO display some error message
            }
        }
    };
}

export default listener;
