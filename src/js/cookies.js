const banner = document.getElementById("cookies-banner");

// ? Show banner on load ?
banner.classList.add("is-visible");

// ? Hide banner on click ?
document.getElementById("cookies-accept").addEventListener("click", () => {
    banner.style.display = "none";
});

document.getElementById("cookies-refuse").addEventListener("click", () => {
    banner.style.display = "none";
});
