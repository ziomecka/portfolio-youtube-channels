const getProperty = require( './get.property' );

function comparator ( options ) {
    const { direction, field } = options;

    const arr = field.split( '.' );

    const localeOptions = [
        undefined,
        {
            numeric: true,
            sensitivity: 'base',
        },
    ];

    return (
        ( direction === 'desc' )
            ? ( itemA, itemB ) => {
                return (
                    getProperty( { obj: Object( itemB ), arr } )
                        .localeCompare(
                            getProperty( { obj: Object( itemA ), arr } ),
                            ...localeOptions
                        )
                );
            }
            : ( itemA, itemB ) => {
                return (
                    getProperty( { obj: Object( itemA ), arr } )
                        .localeCompare(
                            getProperty( { obj: Object( itemB ), arr } ),
                            ...localeOptions
                        )
                );
            }
    );
}

module.exports = comparator;
