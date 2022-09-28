const cardsContainer = document.querySelector(".card-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let lastDoc = null;
let firstDoc = null;
const errorCard = document.querySelector(".card-error");
const loader = document.querySelector(".loader");

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

// create cards //

const loadDocs = (docs) => {
    if (docs.length > 0) {
        lastDoc = docs[docs.length - 1]
        firstDoc = docs[0]
        firstDoc.data().title === "Dark" ? prevBtn.style.display = "none" : prevBtn.style.display = "block"
        lastDoc.data().title === "The Sinner" ? nextBtn.style.display = "none" : nextBtn.style.display = "block"
        cardsContainer.innerHTML = ""
        docs.forEach(doc => {
            cardsContainer.innerHTML +=
            `<div class="card">
                <img class="card-img" src="${doc.data().poster}" alt="${doc.data().title}" loading="lazy">
                <div class="card-info">
                    <h2 class="card-title">${doc.data().title}</h2>
                </div>
            </div>`
        })
        
        showInfo()

    } else {
        loader.style.display = "none"
        errorCard.style.display = "flex"
        errorCard.style.flexDirection = "column"
        errorCard.style.alignItems = "center"
        errorCard.style.justifyContent = "center"
    }
}

// card animations //

const showInfo = () => {
    const cards = document.querySelectorAll(".card")

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener("mouseover", () => {
            const info = card.querySelector(".card-info")
            const title = card.querySelector(".card-title")
            info.style.transform = "translateY(0)"
            info.style.opacity = "1"
            info.style.boxShadow = "inset 0.5rem 0.5rem 1rem #E50914"
            title.style.opacity = "1"
        })
        card.addEventListener("mouseleave", () => {
            const info = card.querySelector(".card-info")
            const title = card.querySelector(".card-title")
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
            loadDocs(snapshot.docs);
        })
    })
    prevBtn.addEventListener("click", () => {
        db.collection("series").orderBy("number", "desc").limit(4).startAfter(firstDoc).onSnapshot((snapshot) => {
            const docs = snapshot.docs.reverse()
            loadDocs(docs)
         })
    })
})();   