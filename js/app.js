const cardsContainer = document.querySelector(".cards-container");
const cardTemplate = document.querySelector("#template");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let lastDoc = null;
let firstDoc = null;
const errorCard = document.querySelector(".cards-error");
const loader = document.querySelector(".loader");

// loading placeholders //

for (let i = 0; i < 4; i++) {
  cardsContainer.append(cardTemplate.content.cloneNode(true))
};

// data fecht //

document.addEventListener("DOMContentLoaded", () => {
    getData()
});

const getData = async () => {
    try {
        await db.collection("series").orderBy("number", "asc").limit(4).onSnapshot((snapshot) => {
        loadDocs(snapshot.docs)
        })
    } catch (error) {
        console.error("Ha ocurrido un problema al cargar los datos del servidor", error)
        errorCard.style.display = "flex"
        errorCard.style.flexDirection = "column"
        errorCard.style.alignItems = "center"
        errorCard.style.justifyContent = "center"
    }
}

// create cards and modals //

const loadDocs = (docs) => {
    const template = document.querySelector("#template").content
    const fragment = document.createDocumentFragment()

    if (docs.length > 0) {
        lastDoc = docs[docs.length - 1]
        firstDoc = docs[0]
        firstDoc.data().title === "Dark" ? prevBtn.style.display = "none" : prevBtn.style.display = "block"
        lastDoc.data().title === "The Sinner" ? nextBtn.style.display = "none" : nextBtn.style.display = "block"
        cardsContainer.innerHTML = ""
        docs.forEach(doc => {
            template.querySelector(".main-button").setAttribute("data-bs-target", `#${doc.data().id}`)
            template.querySelector(".cards-img").setAttribute("src", doc.data().poster)
            template.querySelector(".cards-img").setAttribute("alt", doc.data().title)
            template.querySelector(".cards-title").textContent = doc.data().title
            template.querySelector(".modal").setAttribute("id", doc.data().id)
            template.querySelector(".modal").setAttribute("aria-labelledby", `${doc.data().id}Label`)
            template.querySelector(".modals-header").textContent = doc.data().title
            template.querySelector(".modals-iFrame").setAttribute("src", doc.data().trailer)
            template.querySelector(".modals-p").textContent = doc.data().cast
            template.querySelector(".genre").textContent = doc.data().genre
            template.querySelector(".seasons").textContent = doc.data().seasons
            template.querySelector(".release").textContent = doc.data().release
            
            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
        })

        cardsContainer.appendChild(fragment)
        
        cardAnimations()

    } else {
        loader.style.display = "none"
        errorCard.style.display = "flex"
        errorCard.style.flexDirection = "column"
        errorCard.style.alignItems = "center"
        errorCard.style.justifyContent = "center"
    }
}

// card animations //

const cardAnimations = () => {
    const cards = document.querySelectorAll(".cards")

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        card.addEventListener("mouseover", () => {
            const info = card.querySelector(".cards-info")
            const title = card.querySelector(".cards-title")
            info.style.transform = "translateY(0)"
            info.style.opacity = "1"
            info.style.boxShadow = "inset 0.25rem 0.25rem 0.5rem #E50914"
            title.style.opacity = "1"
        })
        card.addEventListener("mouseleave", () => {
            const info = card.querySelector(".cards-info")
            const title = card.querySelector(".cards-title")
            info.style.transform = "translateY(-15px)"
            info.style.opacity = "0"
            info.style.boxShadow = "none"
            title.style.opacity = "0"
        })
    }
}

// cards pagination //

(cardControllers = () => {
    nextBtn.addEventListener("click", () => {
        db.collection("series").orderBy("number", "asc").limit(4).startAfter(lastDoc).onSnapshot((snapshot) => {
            loadDocs(snapshot.docs)
        })
    })
    prevBtn.addEventListener("click", () => {
        db.collection("series").orderBy("number", "desc").limit(4).startAfter(firstDoc).onSnapshot((snapshot) => {
            const docs = snapshot.docs.reverse()
            loadDocs(docs)
         })
    })
})();