import {
    detectMedia,
    manageDom,
} from '@common';

import { CHANNELS_ERRORS } from './constants';
import createChannel from './_create.channel';

const {
    appendChild,
    findElement,
} = manageDom;

const isProduction = process.env.NODE_ENV === 'production';

/**
 *
 * @param {Object} options
 * @param {Object} options.data
 * @param {Object} options.data.data channels' data
 * @param {Object} options.data.localized localized common for all channels
 * @param {string} options.root
 * @returns void
 */
function createChannels ( options ) {
    const media = detectMedia( window );

    const {
        data: {
            data,
            localized = {},
        },
        root,
    } = options;

    const $root = findElement( {
        selector: root,
        window,
    } );

    if ( $root ) {
        // if no channelsData then return undefined
        if ( !Array.isArray( data ) ) {
            /* eslint-disable no-console */
            console.warn( `createChannels: ${ CHANNELS_ERRORS.get( 'channels_no_data' )}` );
            /* eslint-enable no-console */

            return undefined;
            // TODO display message to user
        }

        // append each channel to root
        data.forEach( channelData => {
            appendChild( {
                element: $root,
                child: createChannel( {
                    channelData,
                    channelsLocalized: localized,
                    media,
                } ),
            } );
        } );
    } else {
        if ( !isProduction ) {
            if ( !$root ) {
                /* eslint-disable no-console */
                console.warn( `createChannels: ${ CHANNELS_ERRORS.get( 'html_not_found' ) }` );
                /* eslint-enable no-console */
            }
        }
        // TODO display message to user
    }
}

export default createChannels;
