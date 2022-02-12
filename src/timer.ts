/**
 * Contains date and time utilities including timing.
 */

export async function now() : Promise<string> {
    const dateTime = new Date();
    return dateTime
}

export async function returnstringdatetime(dateTime: Date) : Promise<string> {

    const date = dateTime.getFullYear()+'-'+(dateTime.getMonth()+1)+'-'+dateTime.getDate();
    const time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    const outputDateTime = date+' '+time;

    return outputDateTime
}

export async function timedelta(dateTime1: Date, dateTime2: Date) : Promise<number> {
    const start = dateTime1.getTime();
    const end = dateTime2.getTime();

    const diff = end - start;
    // const seconds = Math.floor(diff / 1000 % 60);
    return await Math.floor(diff / 1000 % 60);


}