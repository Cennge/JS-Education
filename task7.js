let Task7 = function (sec, min, hour) {
    if (sec = null) {
        sec = 0;
    }
    else if (min = null) {
        min = 0;
    }
    else if (hour = null) {
        hour = 0;
    }

    document.write(`${hour}:${min}:${sec}`);

}
function timeToSeconds(hours, minutes, seconds)
 {
    return hours * 3600 + minutes * 60 + seconds;
}

document.write(`Seconds: ${timeToSeconds(1, 30, 15)} <br/>`);