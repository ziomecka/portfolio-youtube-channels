function buildId ( value ) {
    return `#${ value.replace( /\./g, '-' ) }`;
}

export default buildId;
