const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-menu");
const htmlBody = document.querySelector("body");
const parallax1 = document.querySelector(".img-1");
const parallax2 = document.querySelector(".img-2");
const fadeIn = document.querySelector(".fade-in");
const headerContainer = document.querySelector(".about-container");
const options = {threshold: 1, rootMargin: "0px"};
/* const text = document.querySelector(".main-title"); */

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

setTimeout(() => {
    (fadeInAnimation = () => {
        const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
            entries.forEach(entry => {
                !entry.isIntersecting ? null : (entry.target.classList.toggle("appear"),
                fadeInOnScroll.unobserve(entry.target))
            })
        }, options)
        
        fadeInOnScroll.observe(fadeIn)
    })()
}, 2000)
setTimeout(() => {
    headerContainer.style.marginTop = "12rem"
    headerContainer.style.zIndex = "1"
}, 7000)

// title animation //

/* const textString = text.textContent;
const textSplit = textString.split("");
text.textContent = "";

for (let i = 0; i < textSplit.length; i++) {
    text.innerHTML += "<span>" + textSplit[i] + "</span>"
}

let character = 0;

const onTick = () => {
    const span = text.querySelectorAll("span")[character]
    span.classList.add("fade")
    character++
    if (character === textSplit.length) {
        complete()
        return
    }
}

let timer = setInterval(onTick, 110);

const complete = () => {
    clearInterval(timer)
    timer = null
} */