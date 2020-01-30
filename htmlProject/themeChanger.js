function toggleTheme() {
    const oL = document.getElementById("css");
    const href = oL.getAttribute("href");
    const nL = document.createElement("link");

    nL.setAttribute("id", "css");
    nL.setAttribute("rel", "stylesheet");
    nL.setAttribute("type", "text/css");

    if (href == "css/music.css") {
        nL.setAttribute("href", "css/musicLight.css");
        document.getElementById("#btn").innerText = "Dunkel"
    } else {
        nL.setAttribute("href", "css/music.css");
        document.getElementById("#btn").innerText = "Hell"
    }

    const parent = oL.parentNode;
    parent.replaceChild(nL, oL);
}

var toggletheme = document.getElementById('btn');
toggletheme.addEventListener('click',
    function () {
        toggleTheme();
    },
    true);