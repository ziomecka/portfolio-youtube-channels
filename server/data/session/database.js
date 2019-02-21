// I do not implement database
// I use closure and store data in SESSION_DATA
// The solution is a simplification and will work only on localhost (Not for PRODUCTION)
function createSessionData () {
    let SESSION_DATA;

    return {
        get: async () => Promise.resolve( SESSION_DATA ),
        clear: async () => {
            const result = !!SESSION_DATA;
            SESSION_DATA = null;
            return Promise.resolve( result );
        },
        store: async ( data ) => {
            SESSION_DATA = data;
            return Promise.resolve( true );
        },
    };
}

// initialized only once, returns get, clear and store functions
const sessionData = createSessionData();

module.exports = sessionData;
