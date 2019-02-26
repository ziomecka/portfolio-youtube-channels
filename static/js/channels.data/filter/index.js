import filterRegexp from './filter.regexp';

function filterData ( data, field, text ) {
    return data.filter( ( item ) => {
        item = Object( item );

        if ( typeof item[field] === 'string' ) {
            return item[field].match( filterRegexp( text ) );
        }
    } );
}

export default filterData;
