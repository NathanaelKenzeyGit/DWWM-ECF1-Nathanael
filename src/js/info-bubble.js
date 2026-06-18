const zones = document.querySelectorAll(".plan__zone[data-tooltip]");
const tooltip = document.getElementById("tooltip");

zones.forEach((zone) => {
    // ? Desktop hover ?
    zone.addEventListener("mouseenter", () => {
        tooltip.textContent = zone.dataset.tooltip;
        tooltip.classList.add("is-visible");
    });

    zone.addEventListener("mouseleave", () => {
        tooltip.classList.remove("is-visible");
    });

    // ? Mobile click ?
    zone.addEventListener("click", () => {
        document.querySelectorAll(".plan__zone").forEach((n) => n.classList.remove("is-active"));
        zone.classList.add("is-active");
        tooltip.textContent = zone.dataset.tooltip;
        tooltip.classList.add("is-visible");
    });
});
