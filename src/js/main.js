const cardsShows = async () => {
    try {
        // ? Fetch spectacles data from JSON file ?
        const response = await fetch("casrc/data/spectacles.json");
        // ? Convert response to JSON format ?
        const data = await response.json();
        // ? Get the shows grid container from the DOM ?
        const grid = document.getElementById("shows-grid");

        // ? Loop through the first 3 spectacles only ?
        data.spectacles.slice(0, 3).forEach((n) => {
            // ? Calculate remaining places and sold out status ?
            const placesRestantes = n.places_total - n.places_vendues;
            const soldOut = placesRestantes === 0;
            // ? Calculate fill percentage for progress bar ?
            const pct = Math.round((n.places_vendues / n.places_total) * 100);

            // ? Create card elements ?
            const card = document.createElement("article");
            card.className = `card ${soldOut ? "card--soldout" : ""}`;

            // ? Visual section — image + badge ?
            const affichage = document.createElement("div");
            affichage.className = "card__visual";

            const img = document.createElement("img");
            img.className = "card__img";
            img.src = n.image;
            img.alt = n.titre;

            const badge = document.createElement("span");
            badge.className = `card__badge card__badge--${n.type}`;
            badge.textContent = n.type;

            // ? Body section — title, toggle, meta, fill bar, footer, btn ?
            const body = document.createElement("div");
            body.className = "card__body";

            const title = document.createElement("h3");
            title.className = "card__title";
            title.textContent = n.titre;

            // ? Toggle button — show/hide description ?
            const desc = document.createElement("p");
            desc.className = "card__desc";
            desc.textContent = n.description;
            desc.style.display = "none";

            const toggle = document.createElement("button");
            toggle.className = "card__toggle";
            toggle.textContent = "En savoir +";
            toggle.setAttribute("aria-expanded", "false");

            toggle.addEventListener("click", () => {
                const isOpen = desc.style.display === "block";
                desc.style.display = isOpen ? "none" : "block";
                toggle.textContent = isOpen ? "En savoir +" : "Fermer −";
                toggle.setAttribute("aria-expanded", !isOpen);
            });

            // ? Meta section — artist, date, horaire ?
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

            // ? Progress bar — places sold percentage ?
            const fillBar = document.createElement("div");
            fillBar.className = "card__fill";

            const bar = document.createElement("div");
            bar.className = "card__bar";

            const progress = document.createElement("div");
            progress.className = `card__progress ${soldOut ? "card__progress--soldout" : ""}`;
            progress.style.width = `${pct}%`;

            // ? Footer section — remaining places + price ?
            const footer = document.createElement("div");
            footer.className = "card__footer";

            const places = document.createElement("span");
            places.className = "card__places";
            places.textContent = soldOut ? "Complet" : `${placesRestantes} places restantes`;

            const prix = document.createElement("span");
            prix.className = "card__price";
            prix.textContent = `${n.prix} €`;

            // ? Reserve or full button ?
            const btn = document.createElement("a");
            btn.href = "pages/programmation.html";
            btn.textContent = soldOut ? "Complet" : "Réserver";
            btn.className = "card__btn";

            // ? Append all elements in order ?
            bar.appendChild(progress);
            fillBar.appendChild(bar);
            meta.appendChild(artist);
            meta.appendChild(date);
            meta.appendChild(horaire);
            affichage.appendChild(img);
            affichage.appendChild(badge);
            footer.appendChild(places);
            footer.appendChild(prix);
            body.appendChild(title);
            body.appendChild(toggle);
            body.appendChild(desc);
            body.appendChild(meta);
            body.appendChild(fillBar);
            body.appendChild(footer);
            body.appendChild(btn);
            card.appendChild(affichage);
            card.appendChild(body);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading spectacles data:", error);
    }
};

cardsShows();
