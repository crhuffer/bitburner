import { NS } from "@ns";

export async function assert(testName: string, leftValue: string|number|boolean, rightValue: string|number|boolean, verbose: string|number|boolean, ns: NS): Promise<boolean> {
    // Returns if the 2nd and 3rd arguements are equal and a diagnostics message.
    // Designed to be the building block of a testing suite.
    
    let message = "";
    let testPassed = false;

    if (leftValue == rightValue) {
        message = testName + " passed";
        testPassed = true;
        
    } else {
        message = `Failure Message: ${testName} failed: leftValue = ${leftValue} != rightValue = ${rightValue}`;
        testPassed = false;
        
    }
    
    if(verbose){
        ns.tprint(testPassed, '\t', message)
    }

    return testPassed
}

export async function main(ns: NS): Promise<void> {
    const testName = ns.args[0].toString();
    const leftValue = ns.args[1];
    const rightValue = ns.args[2];
    const verbose = ns.args[3];
    ns.tprint('Inputs to assert: ', testName, leftValue, rightValue, verbose)
    const output = assert(testName, leftValue, rightValue, verbose, ns)
    ns.tprint(output)
}