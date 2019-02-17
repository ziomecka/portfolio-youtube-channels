function readQuery ( query ) {
    const field = Object.keys( query )[0];
    const value = query[field];

    return {
        field,
        value,
    };
}

module.exports = readQuery;
