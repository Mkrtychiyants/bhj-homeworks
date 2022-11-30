const tipRefs = document.getElementsByClassName("has-tooltip");

for (let index = 0; index < tipRefs.length; index++) {
    const element = tipRefs[index];
    element.insertAdjacentHTML("afterend", "<div class='tooltip' style='left: 0; top: 0'> Проверка!</div>");
    element.onclick = function () {
        let ref = this;
        ref.nextElementSibling.textContent = ref.title;
        ref.nextElementSibling.style.top = ref.getBoundingClientRect().bottom + "px";
        ref.nextElementSibling.style.left = ref.getBoundingClientRect().left + 5 + "px";
        ref.nextElementSibling.classList.toggle("tooltip_active");

        return false;
    }
}
