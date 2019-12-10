window.ondevicemotion = function(event) {
    var ax = event.acceleration.x;
    var ay = event.acceleration.y;
    var az = event.acceleration.z;

    let output = "pause";
    if(az > ax && az > ay && az < 0) {
        output = "play"
    }
    document.querySelector("#status").innerHTML = output;
    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;
};

window.addEventListener("deviceorientation", function(event) {
    document.querySelector("#mag").innerHTML = "alpha = " + event.alpha + "<br>" + "beta = " + event.beta + "<br>" + "gamma = " + event.gamma;
}, true);