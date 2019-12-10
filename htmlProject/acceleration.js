window.ondevicemotion = function(event) {
    const ax = Math.round((event.accelerationIncludingGravity.x));
    const ay = Math.round((event.accelerationIncludingGravity.y));
    const az = Math.round((event.accelerationIncludingGravity.z));

    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;

};


window.addEventListener("deviceorientation", function(event) {
    const alpha = Math.round(event.alpha);
    const beta = Math.round(event.beta);
    const gamma = Math.round(event.gamma);
    let out = "play";
    if(Math.abs(gamma) > 170) {
        out = "pause";
    } else {
        out = "play";
    }

    document.querySelector("#status").innerHTML = out;

    document.querySelector("#mag").innerHTML = "alpha = " + alpha + "<br>" + "beta = " + beta + "<br>" + "gamma = " + gamma;
}, true);