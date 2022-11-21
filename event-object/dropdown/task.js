const dropMenue = document.querySelector("div.dropdown__value");
let dropItem = Array.from(document.getElementsByClassName("dropdown__item"));

function listActivator() {
    dropMenue.nextElementSibling.classList.toggle("dropdown__list_active");
}
dropMenue.addEventListener("click", listActivator);

function buttonTextChanger(e) {
    dropMenue.nextElementSibling.classList.remove("dropdown__list_active");
    dropMenue.textContent = this.textContent;
    e.preventDefault();
}

for (let index = 0; index < dropItem.length; index++) {
    dropItem[index].addEventListener("click", buttonTextChanger)
}

