const tabsList = Array.from(document.querySelectorAll("div.tab"));
const tabsContentsList = Array.from(document.querySelectorAll("div.tab__content"));

for (let index = 0; index < tabsList.length; index++) {
    const element = tabsList[index];
    element.addEventListener("click", assignContent);

}

function assignContent(e) {
    document.querySelector("div.tab_active").classList.remove("tab_active");
    document.querySelector("div.tab__content_active").classList.remove("tab__content_active");


    const index = tabsList.indexOf(e.target);

    tabsList[index].classList.add("tab_active");
    tabsContentsList[index].classList.add("tab__content_active");
}