/* eslint-disable no-console, no-undef, no-global-assign */
import { COMMON_ERRORS } from '@common/constants';
import { manageDom } from '@common';

const { createElement } = manageDom;

describe( 'function createElement', () => {
    let consoleSpy;

    beforeEach( () => {
        console = { warn: () => {} };
        consoleSpy = spyOn( console, 'warn' );
    } );

    afterEach( () => {
        consoleSpy.calls.reset();
    } );

    it( 'returns HTMLElement', () => {
        expect( createElement( { window } ) instanceof HTMLElement ).toBe( true );
    } );

    it( 'returns div by default', () => {
        expect( createElement( { window } ).tagName ).toBe( 'DIV' );
    } );

    it( 'returns requested element', () => {
        expect( createElement( { window, tag: 'p' } ).tagName ).toBe( 'P' );
    } );

    it( 'returns div if requested element is not valid', () => {
        expect( createElement( { window, tag: 'foo' } ).tagName ).toBe( 'DIV' );
        expect( console.warn ).toHaveBeenCalledWith( `createElement, tag: ${COMMON_ERRORS.get( 'argument_incorrect' )}` );
    } );

    it( 'assigns attributes to created element', () => {
        const href = 'http://google.com/';
        expect( createElement( { window, tag: 'a', attributes: { href } } ).href ).toBe( href );
    } );

    it( 'assigns texContent to created element', () => {
        const textContent = 'some text';
        expect( createElement( { window, textContent } ).textContent ).toBe( textContent );
    } );
} );
