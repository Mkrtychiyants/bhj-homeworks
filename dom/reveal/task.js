let viewPortHeight = window.innerHeight;

let reviealDivs = document.getElementsByClassName("reveal");

let divTop = reviealDivs[0].getBoundingClientRect().top;

document.addEventListener("scroll", () => {
    for (let index = 0; index < reviealDivs.length; index++) {
        const element = reviealDivs[index];

        if (element.getBoundingClientRect().top < (viewPortHeight / 2)) {
            element.classList.add("reveal_active");
        }

    }

})
