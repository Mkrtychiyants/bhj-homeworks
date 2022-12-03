const chatWidget = document.querySelector("div.chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const chatMessages = document.getElementById("chat-widget__messages");
let dateNow = new Date();
let hoursNow = dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : `${dateNow.getHours()}`;
let minutesNow = dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : `${dateNow.getMinutes()}`;
let currentWord = "";

chatWidget.onclick = function () {
    chatWidget.classList.add("chat-widget_active");
}
chatInput.onkeyup = function (e) {
    if (e.code === "Enter") {
        if (chatInput.value) {

            chatMessages.innerHTML +=
                `<div class="message message_client">
                <div class="message__time">${hoursNow}:${minutesNow}</div>
                <div class="message__text">${chatInput.value.trim()}</div>
                </div>`;
            chatInput.value = "";
            chatMessages.innerHTML +=
                `<div class="message">
                <div class="message__time">${hoursNow}:${minutesNow}</div>
                ${botMessagesArray[checkForRepeat(getRandomInt(0, 6))]}
                </div>`;
                
        }
    }
}


function checkForRepeat(randomInt) {

    if (randomInt === currentWord ) {
        
        return checkForRepeat(getRandomInt(0, 6));
        
    } else {
        
        return currentWord  = randomInt;
    };
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const botMessagesArray = [
    `<div class="message__text">Здрасьте!</div>`,
    `<div class="message__text">Спросил кто?!</div>`,
    `<div class="message__text">Обратитесь попозже!</div>`,
    `<div class="message__text">Учёт!</div>`,
    `<div class="message__text">Вас много, а я одно!</div>`,
    `<div class="message__text">Вас тут не стояло!</div>`
]
