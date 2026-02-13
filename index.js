document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("no");

    function moveButton() {
        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        btn.style.position = "absolute";
        btn.style.left = x + "px";
        btn.style.top = y + "px";
    }

    // desktop
    btn.addEventListener("mouseenter", moveButton);

    // mobil / touch
    btn.addEventListener("touchstart", moveButton);

});
