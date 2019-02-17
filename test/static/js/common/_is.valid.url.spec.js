/* eslint-disable no-console, no-undef, no-global-assign */
import data from './data/_is.valid.url';
import { isValidUrl } from '@common';

describe( 'function isValidUrl', () => {
    it( 'returns true for url starting from http, option http: default true', () => {
        expect( isValidUrl( { url: 'http://www.google.com' } ) ).toBe( true );
    } );

    it( 'returns false for invalid url, option http: default true', () => {
        expect( isValidUrl( { url: '235445' } ) ).toBe( false );
    } );

    it( 'returns true for url not staring from http(s), option http: default true', () => {
        expect( isValidUrl( { url: '/channels.json' } ) ).toBe( false );
    } );

    it( 'returns true for valid url starting from /, option http: false', () => {
        expect( isValidUrl( { url: '/channels.json', http: false } ) ).toBe( true );
    } );

    it( 'returns false for url starting from https, option http: false', () => {
        expect( isValidUrl( { url: 'https://www.google.com', http: false } ) ).toBe( false );
    } );

    it( 'returns undefined if argument without "url" property provided', () => {
        expect( isValidUrl( {} ) ).toBe( undefined );
    } );

    it( 'returns undefined if no argument provided', () => {
        expect( isValidUrl() ).toBe( undefined );
    } );
} );

describe( 'function isValidUrl', () => {
    data.forEach( ( url, ind ) => {
        it( `returns true for valid url, option http: default true
        ind: ${ ind }
        url: ${ url }`, () => {
            expect( isValidUrl( { url } ) ).toBe( true );
        } );
    } );
} );
