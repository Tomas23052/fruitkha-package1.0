function overlayImg(imageSource){
    var overlay = document.getElementById("overlay");
    var img = document.getElementById("imgOverlay");
    img.src = imageSource;
    console.log(imageSource);
    overlay.style.display = "block";
}