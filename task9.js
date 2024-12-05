let Task9 = function (seconds) 
{
    hours = (seconds - (seconds % 3600)) / 3600;
    seconds = seconds % 3600;
    minutes = (seconds - (seconds % 60)) / 60;
    secs = seconds % 60;
}
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}