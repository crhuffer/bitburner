/**
 * Script to run the entire test suite. 
 */

import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    
    await ns.run('tests/test_tests.js', 1)   
    
    
}