function createElement ( attributes, tag = 'div', textContent ) {
    const $element = document.createElement( tag );

    Object.keys( Object( attributes ) ).forEach( key => (
        $element.setAttribute( key, attributes[key] )
    ) );

    // empty string allowed
    if ( typeof textContent === 'string' ) {
        $element.textContent = textContent;
    }

    return $element;
}

export default createElement;
