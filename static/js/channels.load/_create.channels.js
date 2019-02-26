import createChannel from './_create.channel';

function createChannels ( data, root ) {
    const $root = document.querySelector( root );

    // check data will be needed when data is received from server
    if ( $root && data && Array.isArray( data.channels ) ) {
        data.channels.forEach( channelData => (
            $root.appendChild( createChannel( channelData, data.localized ) )
        ) );
    }

    // TODO else: display some 'error' component
}

export default createChannels;
