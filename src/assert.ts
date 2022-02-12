import { NS } from "@ns";

export async function assert(testName: string, leftValue: string, rightValue: string, verbose: boolean, ns: NS): Promise<boolean, string> {
    // Returns if the 2nd and 3rd arguements are equal and a diagnostics message.
    // Designed to be the building block of a testing suite.
    
    let message = "";
    let returnValue = "";

    if (leftValue == rightValue) {
        message = testName + " passed";
        returnValue = [true, message];
        
    } else {
        message = 'Failure Message: ' + testName + " failed: leftValue = " + leftValue + " != rightValue = " + rightValue;
        returnValue = [false, message];
        
    }
    
    if(verbose){
        ns.tprint(returnValue[1])
    }

    return returnValue[1]
}

export async function main(ns: NS): Promise<void> {
    const testName = ns.args[0];
    const leftValue = ns.args[1];
    const rightValue = ns.args[2];
    const verbose = ns.args[3];
    ns.tprint('Inputs to assert: ', testName, leftValue, rightValue, verbose)
    const output = assert(testName, leftValue, rightValue, verbose, ns)
    ns.tprint(output)
}