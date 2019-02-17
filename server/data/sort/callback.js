function callback ( options ) {
    const { comparator, field, direction } = options;

    return comparator( { direction, field } );
}

module.exports = callback;
