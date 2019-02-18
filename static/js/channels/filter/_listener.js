import {
    api,
    isValidUrl,
} from '@common';

import loadChannels from '../_load.channels';

function listener ( options ) {
    const {
        field,
        root,
        url,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !root ||
            typeof root !== 'string' ||
            !field ||
            typeof field !== 'string' ||
            !isValidUrl( { url, http: false } )
        ) {
            /* eslint-disable no-console */
            console.warn( 'filter listener: incorrect argument' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    return async ( value ) => {
        try {
            const data = await api.get( {
                url,
                queries: { [field]: value },
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
    };
}

export default listener;
