function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

document.write(`Seconds: ${timeToSeconds(1, 30, 15)} <br/>`);
