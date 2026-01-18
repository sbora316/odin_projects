function updateClock(){
    const now = new Date();
    const hours = padWithZero(now.getHours());
    const minutes = padWithZero(now.getMinutes());
    const seconds = padWithZero(now.getSeconds());
    const timestring = `${hours}:${minutes}:${seconds}`

    document.getElementById("clock").textContent= timestring;
};

/**
 * A function which takes numeric input
 * and returns a string which always has length 2.
 * If input number is less than 10, it reuturs
 * same number with 0 added to start. Else return
 * given number as is in string format
 * @param {} number 
 * @returns string
 */
function padWithZero(number) {
    if (number > 9) {
        return `${number}`;
    } else {
        return `0${number}`
    }
}
updateClock();
setInterval(updateClock, 1000);
