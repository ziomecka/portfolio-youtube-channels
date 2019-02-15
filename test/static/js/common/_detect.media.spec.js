/* eslint-disable no-console, no-undef, no-global-assign */
import {
    BREAKPOINTS,
    COMMON_ERRORS,
    MEDIA,
} from '@common/constants';

import { detectMedia } from '@common';

describe( 'function detectMedia', () => {
    let consoleSpy;
    let window;
    let windowSpy;

    const currentMedia = 'lg';
    const nextMedia = 'xl';
    const maximumCalls = 10;

    beforeEach( () => {
        window = {
            matchMedia: ( value ) => {
                const matches = ( function () {
                    const val = Number( value.match( /(\d+)/ )[0] );
                    return (
                        ( val >= BREAKPOINTS[currentMedia] + 1 ) &&
                        ( val < BREAKPOINTS[nextMedia] )
                    );
                }() );

                return {
                    matches,
                };
            },
        };

        console = { warn: () => {} };

        consoleSpy = spyOn( console, 'warn' );
        windowSpy = spyOn( window, 'matchMedia' ).and.callThrough();
    } );

    afterEach( () => {
        consoleSpy.calls.reset();
        windowSpy.calls.reset();
    } );

    it( 'calls window.matchMedia the expected number of times', () => {
        const times = ( function () {
            let i = 0;
            let key;

            const iterator = MEDIA.keys();

            do {
                key = iterator.next().value;
                i++;
            } while ( ( key !== currentMedia ) && ( i < maximumCalls ) );

            return i;
        }() );

        detectMedia( window );
        expect( window.matchMedia ).toHaveBeenCalledTimes( times );
    } );

    it( 'calls console warn if run without argument', () => {
        detectMedia();
        expect( console.warn ).toHaveBeenCalledWith( `detectMedia: ${COMMON_ERRORS.get( 'argument_incorrect' )}` );
    } );

    it( 'calls console warn if run with argument without property matchMedia', () => {
        const arg = 'a';
        detectMedia( arg );
        expect( console.warn ).toHaveBeenCalledWith( `detectMedia: ${COMMON_ERRORS.get( 'argument_incorrect' )}` );
    } );

    it( 'calls console warn if run with argument with property matchMedia that is not a function', () => {
        const arg = { matchMedia: 'a' };
        detectMedia( arg );
        expect( console.warn ).toHaveBeenCalledWith( `detectMedia: ${COMMON_ERRORS.get( 'argument_incorrect' )}` );
    } );
} );
