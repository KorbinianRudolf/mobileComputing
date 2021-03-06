
// code music player

var player = document.getElementById('music');
let songChoosen = false;

/**
 * autostart to play the selected file
 * @param event
 */
function playSelectedFile(event) {
    var file = this.files[0],
    type = file.type,
    canPlay = player.canPlayType(type);

    if(canPlay){
        player.src = URL.createObjectURL(file);
        songChoosen = true;
    }


}

var inputNode = document.querySelector('input');
inputNode.addEventListener('change', playSelectedFile, false);

//end code music player



//eventListener for the rotation
window.addEventListener("deviceorientation", function(event) {

    const alpha = Math.round(event.alpha);
    playPause(Math.round(event.beta));
    volume(alpha);

}, true);


/**
 * change the volume depending on the rotation of the alpha z axis
 * @param alpha
 */
function volume(alpha) {
    player.volume =  1 - (alpha / 360);
    document.querySelector('#volume').innerHTML ="Volume: " + Math.round(player.volume * 100).toString() + "%";

}

/**
 * pause the music if the mobile phone lies on the display, so the x axis is rotated 180 Degrees (+-10 Degreess
 * @param beta
 */
function playPause(beta) {
    //let out = "choose Song";
    if(songChoosen) {
        if (Math.abs(beta) > 170) {
            //out = "pause";
            player.pause()
        } else {
            //out = "play";
            player.play();
        }
    }
    //document.querySelector("#message").innerText = out;
}

/*

//not quit sure, whether i need this code or not. But maybe useful for other stuff
//eventListener for device Motion
window.ondevicemotion = function(event) {
    const ax = Math.round((event.accelerationIncludingGravity.x));
    const ay = Math.round((event.accelerationIncludingGravity.y));
    const az = Math.round((event.accelerationIncludingGravity.z));

    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;

};

*/