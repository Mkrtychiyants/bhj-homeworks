const modMain = document.getElementById("subscribe-modal");
const modCloses = document.querySelectorAll("div.modal__close")



if (!(getCookie("isClosed") === "true")) {

    modMain.classList.add("modal_active");
}
modCloses.item(0).onclick = function () {
    modMain.classList.remove("modal_active");
    document.cookie = "isClosed=true";
}

function getCookie(name) {
    const value = "; " + document.cookie;

    let parts = value.split("; " + name + "=")

    return parts.pop()
}