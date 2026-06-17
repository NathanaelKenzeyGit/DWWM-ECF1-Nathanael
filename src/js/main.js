const cardsShows = async () => {
    try {
        // ? i get data ?
        const response = await fetch("/src/data/spectacles.json");
        // ? i convert them to use them in json format ?
        const data = await response.json();
        // ? Je recupere mon id "shows-grid" dans mon html ?
        const grid = document.getElementById("shows-grid");
        data.spectacles.slice(0, 3).forEach((n) => {
            const placesRestantes = n.places_total - n.places_vendues;
            const soldOut = placesRestantes === 0;

            const img = document.createElement("img");
            img.className = "card__img";
            img.src = n.image;
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
            btn.href = "pages/programmation.html";
            btn.textContent = soldOut ? "Complet" : "Réserver";
            btn.className = `card__btn ${soldOut ? "card__btn--soldout" : ""}`;

            const footer = document.createElement("div");
            footer.className = "card__footer";

            const places = document.createElement("span");
            places.className = "card__places";
            places.textContent = soldOut ? "Complet" : `${placesRestantes} places restantes`;

            const prix = document.createElement("span");
            prix.className = "card__price";
            prix.textContent = `${n.prix} €`;

            meta.appendChild(artist);
            meta.appendChild(date);
            meta.appendChild(horaire);

            affichage.appendChild(badge);
            affichage.appendChild(img);

            body.appendChild(title);
            body.appendChild(meta);

            footer.appendChild(places);
            footer.appendChild(prix);

            body.appendChild(footer);
            body.appendChild(btn);

            card.appendChild(affichage);
            card.appendChild(body);

            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
    }
};

cardsShows();
