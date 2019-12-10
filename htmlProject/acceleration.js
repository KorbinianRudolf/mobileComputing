window.ondevicemotion = function(event) {
    playPause(event);
};

function playPause(event) {
    const ax = Math.round((event.accelerationIncludingGravity.x));
    const ay = Math.round((event.accelerationIncludingGravity.y));
    const az = Math.round((event.accelerationIncludingGravity.z));

    let output = "play";
    const z = Math.abs(az);
    if(!((z > ax) && (z > ay) && (az < 0))) {
        output = "pause";
    } else {
        output = "pause";
    }
    document.querySelector("#status").innerHTML = output;
    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;
}

window.addEventListener("deviceorientation", function(event) {
    document.querySelector("#mag").innerHTML = "alpha = " + event.alpha + "<br>" + "beta = " + event.beta + "<br>" + "gamma = " + event.gamma;
}, true);