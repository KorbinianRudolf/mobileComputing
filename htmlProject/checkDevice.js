var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

if(!isMobile) {
    alert("Hallo, sieht so aus, als würde dieses Gerät kein Gyroskop o.Ä. besitzen. \n" +
        "Versuchen sie es mal mit einem Handy.");
}