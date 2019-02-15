const helper = ( options ) => {
    const { pattern, callback } = options;

    return (
        ( typeof pattern === 'string' )
            ? callback( { pattern } )
            : callback()
    );
};

export default helper;

