const bkcontrol = document.getElementsByClassName("book__control")[0].children;

const bk = document.getElementById("book");


for (let index = 0; index < bkcontrol.length; index++) {
    const element = bkcontrol[index];
    element.addEventListener("click", changeFont)
}


function changeFont() {
    let cds = this;

    if (!cds.classList.contains("font-size_active")) {
        document.getElementsByClassName("font-size_active")[0].classList.remove("font-size_active");

        if (cds.classList.contains("font-size_big")) {
            bk.classList.add("book_fs-big");
        }
        if (cds.classList.contains("font-size_small")) {
            bk.classList.add("book_fs-small");
        }

        cds.classList.add("font-size_active");

        return false;
    }
}