const viewPortHeight = window.innerHeight;

const reviealDivs = document.getElementsByClassName("reveal");

document.addEventListener("scroll", () => {
    for (let index = 0; index < reviealDivs.length; index++) {
       
        const element = reviealDivs[index];
        const elementTop = element.getBoundingClientRect().top;
        
        if ((elementTop < viewPortHeight) && (elementTop > 0)) {
            element.classList.add("reveal_active");
        }
        else {
            element.classList.remove("reveal_active");
        }

    }

})
