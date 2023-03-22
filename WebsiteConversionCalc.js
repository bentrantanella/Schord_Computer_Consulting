


function conversion(startDist, startTime, endDist) {
    let startTimeinSec = timeToSec(startTime);
    let metersPerSec = startDist / startTimeinSec;
    
    let endTime = Math.floor(endDist / metersPerSec);
    
    return secToTime(endTime);
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

console.log(conversion(3218, "9:00", 3000))
