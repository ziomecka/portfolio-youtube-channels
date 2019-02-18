function isNotEmptyString ( val ) {
    return (
        val && ( typeof val === 'string' )
    );
}

export default {
    isNotEmptyString,
};
