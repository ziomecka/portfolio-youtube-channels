import {
    DEFAULT_DIRECTION,
    DEFAULT_LOCALE_OPTIONS,
} from '../constants';

import getProperty from './get.property';

function sortData ( data, field, direction = DEFAULT_DIRECTION, localeOptions = DEFAULT_LOCALE_OPTIONS ) {
    const fieldsArray = field.split( '.' );

    return [...data].sort(
        ( direction === 'desc' )
            ? ( itemA, itemB ) => (
                getProperty( itemB, fieldsArray )
                    .localeCompare( getProperty( itemA, fieldsArray ), ...localeOptions )
            )
            : ( itemA, itemB ) => (
                getProperty( itemA, fieldsArray )
                    .localeCompare( getProperty( itemB, fieldsArray  ), ...localeOptions )
            )
    );
}

export default sortData;
