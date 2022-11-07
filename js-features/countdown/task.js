let timerNum = document.getElementById("timer");

let hourse = 0;
let minutes = 0;
let secs = Number(timerNum.textContent);

timerNum.textContent = `${hourse < 10 ? `0${hourse}` : `${hourse}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${secs < 10 ? `0${secs}` : `${secs}`}`;

let tmr = setInterval(() => {
    if (Number(secs) === 0) {
        if (Number(minutes) === 0) {
            if (Number(hourse) === 0) {
                alert("Вы победили в конкурсе!");
                window.location.assign("https://www.vuze.com/download.php")
                clearInterval(tmr);
            }
            hourse -= 1;
            minutes = 60;
        }
        minutes -= 1;
        secs = 60;
    }
    secs -= 1;
    timerNum.textContent = `${hourse < 10 ? `0${hourse}` : `${hourse}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${secs < 10 ? `0${secs}` : `${secs}`}`;
}, 1000);



