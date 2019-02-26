function removeChannels ( root ) {
    const $root = document.querySelector( root );

    if ( $root ) {
        $root.innerHTML = '';
    }
}

export default removeChannels;
