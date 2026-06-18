window.addEventListener("load", () => {
    const left = document.getElementById("curtain-left");
    const right = document.getElementById("curtain-right");
    const curtain = document.getElementById("curtain");

    // ? Non blocking — pointer-events none during animation ?
    curtain.style.pointerEvents = "none";

    gsap.timeline()
        .to(left, {
            x: "-100%",
            duration: 1.2, // ← > 0.8s ✅
            ease: "power2.inOut",
            delay: 0.5,
        })
        .to(
            right,
            {
                x: "100%",
                duration: 1.2,
                ease: "power2.inOut",
            },
            "<"
        ) // ← les deux en même temps
        .set(curtain, { display: "none" }); // ← disparaît après
});
