const modMain = document.getElementById("modal_main");
modMain.style.display = "block";
const modals = document.getElementsByClassName("modal");
const modCloses = document.querySelectorAll("div.modal__close")
const showSuc = document.getElementsByClassName("show-success");
const modSuc = document.getElementById("modal_success");


function closeMod() {
    let cross = this;
    console.log(cross.parentElement.parentElement.style.display = "none");
}

for (let index = 0; index < modals.length; index++) {
    modCloses.item(index).onclick = closeMod;
}

showSuc.item(0).onclick = () => {
    modSuc.style.display = "block"
}