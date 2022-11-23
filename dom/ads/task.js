const changeblSpans = Array.from(document.getElementsByClassName("rotator__case"));

let currentAct = changeblSpans.indexOf(document.getElementsByClassName("rotator__case_active").item(0));

setInterval(() => {
    changeblSpans[currentAct].classList.remove("rotator__case_active");

    currentAct = (currentAct + 1) % changeblSpans.length;

    changeblSpans[currentAct].classList.add("rotator__case_active");

}, 1000);