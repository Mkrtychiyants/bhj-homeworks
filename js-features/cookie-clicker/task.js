let cookiePict = document.getElementById("cookie");
let clsSpan = document.getElementById("clicker__counter");
let velSpan = document.getElementById("clicker__vel");
let n = 0;
let clk = Number(clsSpan.textContent);
let start = Date.now();

let zoomerToggle = function () {

    if (n === 0) {
        cookiePict.width *= 1.5;
        cookiePict.height *= 1.5;
        n = 1;
        clk++;
    }
    else {
        cookiePict.width /= 1.5;
        cookiePict.height /= 1.5;
        n = 0;
        clk++;
    }
    clsSpan.textContent = clk;


    let end = Date.now();
    let millisecs = end - start;
    let seccs = new Date(millisecs);
    velSpan.textContent = clk / seccs.getSeconds();
}

cookiePict.onclick = zoomerToggle;

