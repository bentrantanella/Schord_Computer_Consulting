


function timeToKMPace(startTime, startDist) {
    let timeInSec = timeToSec(startTime);
    let distInKM = startDist / 1000;

    let secPerKM = timeInSec / distInKM;
    return secToTime(secPerKM);
}

function timeToMilePace(startTime, startDist) {
    let timeInSec = timeToSec(startTime);
    let distInMiles = startDist / 1609;

    let secPerMile = timeInSec / distInMiles;
    return secToTime(secPerMile)
}

function timeToSec(time) {
    timeStrs = time.split(":");
    let timeNums = [];
    for(let i = 0; i < timeStrs.length; i++) {
        timeNums.push(Number(timeStrs[i]));
    }
    totalSec = (timeNums[0] * 60) + timeNums[1];
    return totalSec;
}

function secToTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    if (seconds < 10) {
        return String(minutes) + ":0" + seconds.toFixed(2);
    } else {
        return String(minutes) + ":" + seconds.toFixed(2);
    }
    
}

console.log(timeToKMPace("8:57", 3000))
console.log(timeToMilePace("10:00", 3218))
