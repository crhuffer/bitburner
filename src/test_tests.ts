/**
 * Holds test verifying that the testing functionality is behaving as expected.
 */

import { NS } from "@ns";
import { assert } from "assert.js";
import { now, timedelta, returnstringdatetime } from "timer.js";

export async function main(ns: NS): Promise<[number, number]> {
  //
  ns.tprint("\n\n");

  let counterPassed = 0;
  let counterTotal = 0;

  const listAsserts = [
    assert("Assert passes with ones", '1', '1', true, ns),
    assert("Assert passes with zeroes", '1', '1', true, ns),
    assert("Assert failes with one and zero", '1', '0', true, ns),
  ];

  for (const assertStatement of listAsserts) {
    const startTime = await now();
    const returnValue = await assertStatement;
    const didTestPass = returnValue;
    if (didTestPass) {
      counterPassed++;
    }
    counterTotal++;
    const endTime = await now();
    await ns.tprint(`Start Time: ${await returnstringdatetime(startTime)}, End Time: ${await returnstringdatetime(endTime)})`);
    await ns.tprint(`Test took ${(await timedelta(endTime, startTime)).toString()} seconds.`);
  }

  ns.tprint(
    "test_tests.js Testing Suite Finished: " +
      counterPassed +
      " tests passed of " +
      counterTotal +
      " tests or " +
      (counterPassed / counterTotal) * 100 +
      "%."
  );
  return [counterPassed, counterTotal];
}