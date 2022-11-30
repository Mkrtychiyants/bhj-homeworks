const interestCheck = document.getElementsByClassName("interest__check");

for (let index = 0; index < interestCheck.length; index++) {

    const element = interestCheck[index];

    element.addEventListener("click", checkChildren)


}

function checkChildren() {
    const element = this;

    if (element.parentElement.nextElementSibling) {
        if (!element.checked) {
            for (let index = 0; index < element.parentElement.nextElementSibling.children.length; index++) {
                element.parentElement.nextElementSibling.children[index].querySelector("input[type=checkbox]").checked = false;
            }
        }
        if (element.checked) {

            for (let index = 0; index < element.parentElement.nextElementSibling.children.length; index++) {
                element.parentElement.nextElementSibling.children[index].querySelector("input[type=checkbox]").checked = true;
            }
        }
    }
}