async function loadText ( url ) {
    const result = await fetch( url )
        .catch( err => {
            if ( process.env.NODE_ENV === 'production' ) {
                console.warn( `loadText: ${ err.message || err.toString() }` ); // eslint-disable-line
            }

            return '';
        } )
        .then( async ( response ) => await response.text() );

    return result;
}

export default loadText;
