const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-menu");
const htmlBody = document.querySelector("body");
const parallax1 = document.querySelector(".img-1");
const parallax2 = document.querySelector(".img-2");
const fadeIn = document.querySelector(".fade-in");
const headerContainer = document.querySelector(".about-container");
const options = {threshold: 1, rootMargin: "0px"};
const text = document.querySelector(".main-title");
let character = 0;

// responsive menu //

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    htmlBody.classList.toggle("active")
});

document.querySelectorAll(".navigation-link").forEach(e => e.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    htmlBody.classList.remove("active")
}));

document.querySelector(".navigation-logo").addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    htmlBody.classList.remove("active")
});

// parallax effect //

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY
    parallax1.style.left = scrollValue * -2 + "px"
    parallax2.style.right = scrollValue * -2 + "px"
});

// fade in animation //

(fadeInAnimation = () => {
    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                null
            } else {
                setTimeout(() => {
                    entry.target.classList.toggle("appear")
                }, 1000)
                setTimeout(() => {
                    headerContainer.style.marginTop = "12rem"
                    headerContainer.style.zIndex = "1"
                }, 8000)
                fadeInOnScroll.unobserve(entry.target)
            }
        })}, options)

    fadeInOnScroll.observe(fadeIn)
})();

// title animation //

const textString = text.textContent;
const textSplit = textString.split("");
text.textContent = "";

for (let i = 0; i < textSplit.length; i++) {
    text.innerHTML += "<span>" + textSplit[i] + "</span>"
}

(fadeTitleAnimation = () => {
    const fadeTitleOnScroll = new IntersectionObserver((entries, fadeTitleOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                null
            } else {
                entry.target.classList.toggle("appear")
                
                const onTick = () => {
                    const span = text.querySelectorAll("span")[character]
                    span.classList.add("reveal")
                    character++
                    if (character === textSplit.length) {
                        complete()
                        return
                    }
                }

                const complete = () => {
                    clearInterval(timer)
                    timer = null
                }

                let timer = setInterval(onTick, 110)
                
                fadeTitleOnScroll.unobserve(entry.target)
            }
        })}, options)

    fadeTitleOnScroll.observe(text)
})();