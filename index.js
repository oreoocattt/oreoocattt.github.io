const btn = document.getElementById("no");

btn.addEventListener("mouseover", function() {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});