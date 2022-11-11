const menuLink = document.getElementsByClassName("menu__link");
const actMenu = document.getElementsByClassName("menu_main");
for (let index = 0; index < menuLink.length; index++) {
    menuLink.item(index).onclick = menuActiveToggle;
}

let actMenuAct = document.getElementsByClassName("menu_active");


function menuActiveToggle() {
    let element = this;
    let parentEl = element.parentElement;
    let subMenu = parentEl.querySelector("ul.menu");
    
    if (subMenu) {
        subMenu.classList.toggle("menu_active");
        return false;
    }

}
