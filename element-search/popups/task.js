const modMain = document.getElementById("modal_main");
const modals = document.getElementsByClassName("modal");
const modCloses = document.querySelectorAll("div.modal__close")
const showSuc = document.querySelector(".show-success");
const modSuc = document.getElementById("modal_success");

modMain.classList.add("modal_active");


function closeMod() {
    let cross = this;
    cross.closest("div.modal").classList.remove("modal_active");
}

for (let index = 0; index < modals.length; index++) {
    modCloses.item(index).onclick = closeMod;
}

showSuc.onclick = () => {
    let schowSucParent = showSuc.closest("div.modal");
    schowSucParent.nextElementSibling.classList.add("modal_active");
    schowSucParent.classList.remove("modal_active");
}