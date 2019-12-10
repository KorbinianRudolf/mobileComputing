
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDyNpMIiamU0QmEV0y8WjGb-MBU3LfRimqGKtk_rQEOKwnpu04slpCmOGAUPMPgzp_LAycZ7KXdeU9SjPGi4Q1fd4eH6ub-nVumW7LOFp6vwPVejrdtqdhN2Ko4RBxZHTGsW_zQOlLH2T6QznE896kUE8aixdtzAyxmCu3tzA';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};


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

    if(Math.abs(beta) > 170) {
        out = "pause";
    } else {
        out = "play";
    }

    document.querySelector("#status").innerHTML = out;

    document.querySelector("#mag").innerHTML = "alpha = " + alpha + "<br>" + "beta = " + beta + "<br>" + "gamma = " + gamma;
}, true);