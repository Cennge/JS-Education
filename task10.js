function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
    let time1InSeconds = timeToSeconds(h1, m1, s1);
    let time2InSeconds = timeToSeconds(h2, m2, s2);

    let diffInSeconds;
    if (time1InSeconds > time2InSeconds) {
        diffInSeconds = time1InSeconds - time2InSeconds;
    } else {
        diffInSeconds = time2InSeconds - time1InSeconds;
    }

    let hours = Math.floor(diffInSeconds / 3600);
    let minutes = Math.floor((diffInSeconds % 3600) / 60);
    let seconds = diffInSeconds % 60;

    let timeString = '';
    
    if (hours < 10) {
        timeString += '0';
    }
    timeString += hours + ':';

    if (minutes < 10) {
        timeString += '0';
    }
    timeString += minutes + ':';

    if (seconds < 10) {
        timeString += '0';
    }
    timeString += seconds;

    return timeString;
}

document.write(`Time difference: ${timeDifference(12, 30, 45, 14, 15, 30)} <br/>`);
document.write(`Time difference: ${timeDifference(23, 59, 59, 0, 0, 0)} <br/>`);
