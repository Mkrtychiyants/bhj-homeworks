let deadInput = document.getElementById("dead");
let lostInput = document.getElementById("lost");
let holeGame = document.getElementsByClassName("hole");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function killTheMole() {
    let element = this;

    if (element.classList.contains('hole_has-mole')) {
        deadInput.textContent = Number(deadInput.textContent) + 1;
    }

    if (!element.classList.contains('hole_has-mole')) {
        lostInput.textContent = Number(lostInput.textContent) + 1;
    }
    if (Number(deadInput.textContent) === 10) {
        showMessage("Win!");
    }
    if (Number(lostInput.textContent) === 5) {
        showMessage("Lose!");
    }

};

for (let index = 1; index < holeGame.length + 1; index++) {
    getHole(index).onclick = killTheMole;
}


function showMessage(mess) {
    window.confirm(mess);
    lostInput.textContent = 0;
    deadInput.textContent = 0;
}