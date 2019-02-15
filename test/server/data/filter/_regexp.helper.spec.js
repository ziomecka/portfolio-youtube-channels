/* eslint-disable no-console, no-undef, no-global-assign */
import helper from './_regexp.helper';

describe( 'filter.regexp.helper', () => {
    let spyCallback;
    let options;

    beforeEach( () => {
        options = { callback: () => {} };
        spyCallback = spyOn( options, 'callback' );
    } );

    afterEach( () => {
        spyCallback.calls.reset();
    } );

    it( 'calls callback with undefined if pattern is undefined', () => {
        helper( options );
        expect( options.callback ).toHaveBeenCalledWith();
        expect( options.callback ).toHaveBeenCalledTimes( 1 );
    } );


    it( 'calls callback with undefined if pattern is number', () => {
        options.pattern = 123;
        helper( options );
        expect( options.callback ).toHaveBeenCalledWith();
        expect( options.callback ).toHaveBeenCalledTimes( 1 );
    } );

    it( 'calls callback with undefined if pattern is object', () => {
        options.pattern = {};
        helper( options );
        expect( options.callback ).toHaveBeenCalledWith();
        expect( options.callback ).toHaveBeenCalledTimes( 1 );
    } );

    it( 'calls callback with pattern', () => {
        options.pattern = 'd';
        helper( options );
        expect( options.callback ).toHaveBeenCalledWith( { pattern: options.pattern } );
    } );
} );
