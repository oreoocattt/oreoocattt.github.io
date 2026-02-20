document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("no");
    const yop = document.getElementById("yes");

    function isOverlapping(rect1, rect2) {
        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    }

    function moveButton() {
        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;

        let x, y;
        let tries = 0;
        const maxTries = 100;

        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;

            btn.style.position = "absolute";
            btn.style.left = x + "px";
            btn.style.top = y + "px";

            tries++;

        } while (
            isOverlapping(
                btn.getBoundingClientRect(),
                yop.getBoundingClientRect()
            ) && tries < maxTries
            );
    }

    // desktop
    btn.addEventListener("mouseenter", moveButton);

    // mobil / touch
    btn.addEventListener("touchstart", moveButton);

    yop.addEventListener("click", function() {
        window.location.href = "jo.html";
    });
});