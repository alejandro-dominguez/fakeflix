const cardsContainer = document.querySelector(".cards-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let lastDoc = null;
let firstDoc = null;
const errorCard = document.querySelector(".cards-error");
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

// create cards and modals //

const loadDocs = (docs) => {
    if (docs.length > 0) {
        lastDoc = docs[docs.length - 1]
        firstDoc = docs[0]
        firstDoc.data().title === "Dark" ? prevBtn.style.display = "none" : prevBtn.style.display = "block"
        lastDoc.data().title === "The Sinner" ? nextBtn.style.display = "none" : nextBtn.style.display = "block"
        cardsContainer.innerHTML = ""
        docs.forEach(doc => {
            cardsContainer.innerHTML +=
        `<button type="button" class="main-button" data-bs-toggle="modal" data-bs-target="#${doc.data().id}">
            <div class="cards">
            <img class="cards-img" src="${doc.data().poster}" alt="${doc.data().title}" loading="lazy">
                <div class="cards-info">
                    <h3 class="cards-title">${doc.data().title}</h3>
                </div>
            </div>
        </button>
        <div class="modal fade" id="${doc.data().id}" tabindex="-1" data-bs-backdrop="static"
        data-bs-keyboard="false" aria-labelledby="${doc.data().id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modals">
                        <button type="button" class="modals-btn" data-bs-dismiss="modal" aria-label="Close">
                            <i class="modals-close fa-solid fa-x"></i>
                        </button>
                        <h4 class="modals-header">${doc.data().title}</h4>
                        <div class="modals-iFrame-container">
                            <iframe class="modals-iFrame" src="${doc.data().trailer}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <h5 class="modals-data">Reparto:</h5>
                        <p class="modals-p">${doc.data().cast}.</p>
                        <p class="modals-data">Género: ${doc.data().genre}.<br>Temporadas: ${doc.data().seasons}.
                        <br>Año de estreno: ${doc.data().release}.</p>
                    </div>
                </div>
            </div>
        </div>`
        })

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