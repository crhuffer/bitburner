import { NS } from '@ns'

export async function analyzeTargetServer(targetServerName: string, ns: NS) : Promise<[number, number,number,number,number,number,number,number,number]> {
    ns.tprint(`Target Server Name: ${targetServerName}`)
    const moneyFracOnHack = await ns.hackAnalyze(targetServerName);
    const securityOnHack = await ns.hackAnalyzeSecurity(1);
    const securityOnWeaken = await ns.weakenAnalyze(1);
    const securityOnGrow = await ns.growthAnalyzeSecurity(1);
    const durationOnGrow = await ns.getGrowTime(targetServerName);
    const durationOnWeaken = await ns.getWeakenTime(targetServerName);
    const durationOnHack = await ns.getHackTime(targetServerName);
    const serverMoneyAvailable = await ns.getServerMoneyAvailable(targetServerName);
    const serverMoneyMax = await ns.getServerMaxMoney(targetServerName) / 1e6;
    return [moneyFracOnHack, securityOnHack, securityOnWeaken, securityOnGrow, durationOnGrow, durationOnWeaken, durationOnHack, serverMoneyAvailable, serverMoneyMax];
}

export async function formatAnalyzeTargetServer(args: [number, number,number,number,number,number,number,number,number]) : Promise<string> {

    const precision = 3
    const moneyFracOnHack = args[0].toPrecision(precision)
    const securityOnHack = args[1].toPrecision(precision)
    const securityOnWeaken = args[2].toPrecision(precision)
    const securityOnGrow = args[3].toPrecision(precision)
    const durationOnGrow = args[4].toPrecision(precision)
    const durationOnWeaken = args[5].toPrecision(precision)
    const durationOnHack = args[6].toPrecision(precision)
    const serverMoneyAvailable = args[7].toPrecision(precision)
    const serverMoneyMax = args[8].toPrecision(precision)

    const message = `moneyFracOnHack: ${(moneyFracOnHack)} securityOnHack: ${(securityOnHack)} securityOnWeaken: ${(securityOnWeaken)} securityOnGrow: ${(securityOnGrow)} durationOnGrow: ${(durationOnGrow)} durationOnWeaken: ${(durationOnWeaken)} durationOnHack: ${(durationOnHack)} serverMoneyAvailable: ${(serverMoneyAvailable)} serverMoneyMax: ${(serverMoneyMax)}`
    return message;
}


export async function main(ns : NS) : Promise<void> {
    const targetServerName = <string> ns.args[0]
    const analysisResults = await analyzeTargetServer(targetServerName, ns)
    // ns.tprint(analysisResults)
    ns.tprint(await formatAnalyzeTargetServer(analysisResults))
}