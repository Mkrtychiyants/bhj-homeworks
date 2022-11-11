const cookiePict = document.getElementById("cookie");
const clsSpan = document.getElementById("clicker__counter");
const velSpan = document.getElementById("clicker__vel");
let n = 0;
let clk = Number(clsSpan.textContent);
let start = Date.now();

let zoomerToggle = function () {

    cookiePict.width = (n === 0) ? cookiePict.width *= 1.5 : cookiePict.width /= 1.5;
    cookiePict.height = (n === 0) ? cookiePict.height *= 1.5 : cookiePict.height /= 1.5;
    n = (n === 0) ? 1 : 0;
    clk++;

    clsSpan.textContent = clk;


    let end = Date.now();
    let millisecs = end - start;
    let seccs = new Date(millisecs);
    velSpan.textContent = clk / seccs.getSeconds();
}

cookiePict.onclick = zoomerToggle;

