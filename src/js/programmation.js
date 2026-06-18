let allSpectacles = [];
let activeType = "all";
let activeDate = "all";
let hideSoldOut = false;

const grid = document.getElementById("prog-grid");

// ! Create card — same as main.js !
const createCard = (n) => {
    const placesRestantes = n.places_total - n.places_vendues;
    const soldOut = placesRestantes === 0;
    const pct = Math.round((n.places_vendues / n.places_total) * 100);

    const img = document.createElement("img");
    img.className = "card__img";
    img.src = `../${n.image}`;
    img.alt = n.titre;

    const card = document.createElement("article");
    card.className = `card ${soldOut ? "card--soldout" : ""}`;

    const affichage = document.createElement("div");
    affichage.className = "card__visual";

    const badge = document.createElement("span");
    badge.className = `card__badge card__badge--${n.type}`;
    badge.textContent = n.type;

    const body = document.createElement("div");
    body.className = "card__body";

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = n.titre;

    const meta = document.createElement("div");
    meta.className = "card__meta";

    const artist = document.createElement("span");
    artist.className = "card__artist";
    artist.textContent = n.artiste;

    const date = document.createElement("span");
    date.className = "card__date";
    date.textContent = n.date;

    const horaire = document.createElement("span");
    horaire.className = "card__hours";
    horaire.textContent = n.horaire;

    const btn = document.createElement("a");
    btn.href = "#";
    btn.textContent = soldOut ? "Complet" : "Réserver";
    btn.className = "card__btn";

    const footer = document.createElement("div");
    footer.className = "card__footer";

    const places = document.createElement("span");
    places.className = "card__places";
    places.textContent = soldOut ? "Complet" : `${placesRestantes} places restantes`;

    const prix = document.createElement("span");
    prix.className = "card__price";
    prix.textContent = `${n.prix} €`;

    const fillBar = document.createElement("div");
    fillBar.className = "card__fill";

    const bar = document.createElement("div");
    bar.className = "card__bar";

    const progress = document.createElement("div");
    progress.className = `card__progress ${soldOut ? "card__progress--soldout" : ""}`;
    progress.style.width = `${pct}%`;

    bar.appendChild(progress);
    fillBar.appendChild(bar);
    meta.appendChild(artist);
    meta.appendChild(date);
    meta.appendChild(horaire);
    affichage.appendChild(badge);
    affichage.appendChild(img);
    footer.appendChild(places);
    footer.appendChild(prix);
    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(fillBar);
    body.appendChild(footer);
    body.appendChild(btn);
    card.appendChild(affichage);
    card.appendChild(body);

    return card;
};

// ? Render filtered cards ?
const renderCards = () => {
    grid.textContent = "";

    [...allSpectacles]
        .filter((n) => activeType === "all" || n.type === activeType)
        .filter((n) => activeDate === "all" || n.date === activeDate)
        .filter((n) => !hideSoldOut || n.places_vendues < n.places_total)
        .forEach((n) => grid.appendChild(createCard(n)));
};

// ? Fetch data ?
const fetchProg = async () => {
    try {
        const response = await fetch("../src/data/spectacles.json");
        const data = await response.json();
        allSpectacles = data.spectacles;
        renderCards();
    } catch (error) {
        console.error("Erreur :", error);
    }
};

// ? Filter buttons ?
document.querySelectorAll(".prog-filters__btn[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const { filter, value } = btn.dataset;

        if (filter === "type") activeType = value;
        if (filter === "date") activeDate = value;

        document.querySelectorAll(`.prog-filters__btn[data-filter="${filter}"]`).forEach((b) => {
            b.classList.remove("prog-filters__btn--active");
        });
        btn.classList.add("prog-filters__btn--active");

        renderCards();
    });
});

// ? Toggle sold out ?
document.getElementById("toggle-soldout").addEventListener("click", (e) => {
    hideSoldOut = !hideSoldOut;
    e.target.classList.toggle("active");
    e.target.textContent = hideSoldOut ? "Afficher les complets" : "Masquer les complets";
    renderCards();
});

fetchProg();
