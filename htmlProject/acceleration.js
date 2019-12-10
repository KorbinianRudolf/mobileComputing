// code music player

var player = document.getElementById('music');

function playSelectedFile(event) {
    var file = this.files[0],
    type = file.type,
    canPlay = player.canPlayType(type);

    if(canPlay)
        player.src = URL.createObjectURL(file);
}

var inputNode = document.querySelector('input');
inputNode.addEventListener('change', playSelectedFile, false);

//end code music player

/*
window.ondevicemotion = function(event) {
    const ax = Math.round((event.accelerationIncludingGravity.x));
    const ay = Math.round((event.accelerationIncludingGravity.y));
    const az = Math.round((event.accelerationIncludingGravity.z));

    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;

};

*/

window.addEventListener("deviceorientation", function(event) {
    const alpha = Math.round(event.alpha);
    const beta = Math.round(event.beta);
    const gamma = Math.round(event.gamma);

    playPause(event);

    document.querySelector("#mag").innerHTML = "alpha = " + alpha + "<br>" + "beta = " + beta + "<br>" + "gamma = " + gamma;
}, true);

function playPause(event) {
    const beta = Math.round(event.beta);
    let out = "play";
    if(Math.abs(beta) > 170) {
        out = "pause";
        player.pause()
    } else {
        out = "play";
        player.play();
    }
    document.querySelector("#status").innerHTML = out;
}