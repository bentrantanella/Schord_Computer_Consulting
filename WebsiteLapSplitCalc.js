

function lapSplitCalc(startDist, startTime, trackSize) {
    let timeInSec = timeToSec(startTime);
    let numLaps = startDist / trackSize;
    
    

    let secPerLap = timeInSec / numLaps;
    let timePerLap = secToTime(secPerLap);

    let runningTot = timeInSec;
    let timesList = [];
    while (runningTot >= secPerLap) {
        timesList.push(secToTime(runningTot));
        runningTot -= secPerLap;
    }

    if (runningTot > 0) {
        timesList.push(secToTime(runningTot));
    }

    let timesAtLaps = "";
    for (let i = timesList.length - 1; i >= 0; i--) {
        timesAtLaps += timesList[i];
        if (i > 0) {
            timesAtLaps += ", "
        }
    }

    return "Time per lap: " + timePerLap + "\n" + "Number of laps: " + numLaps.toFixed(2) + "\n" + "Clock time when crossing finish line each lap: " + timesAtLaps;
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

console.log(lapSplitCalc(1600, "4:10", 200))
