/**
 * Simplest case to test the assert functionality.
 */

import { NS } from '@ns'
import { assert } from 'assert.js'

export async function main(ns : NS) : Promise<void> {
    //
    const counterPassed = 0;
    const counterTotal = 0;
    
    const returnValue = assert('Assert passes with ones', '1', '1', true, ns);

    ns.tprint(counterPassed, counterTotal, returnValue)

    ns.tprint('Testing Suite Finished: ' + counterPassed + ' tests passed of ' + counterTotal + ' tests or ' + counterPassed/counterTotal*100. + '%.')
        
}