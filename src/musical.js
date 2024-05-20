const audioElement = document.getElementById("music-player");
const charElement = document.getElementById("character");
const globeElement = document.getElementById("globe");

document.addEventListener("DOMContentLoaded", ()=> {
    audioElement.addEventListener("play", ()=> {
        console.log("I clicked play!");
        charElement.classList.remove("idle-anim");
        charElement.classList.add("walk-anim");
        globeElement.classList.add("globe-spin");
    });
    audioElement.addEventListener("pause", ()=> {
        console.log("I clicked pause!");
        charElement.classList.remove("walk-anim");
        charElement.classList.add("idle-anim");
        globeElement.classList.remove("globe-spin");
    });
});


// animation classes = idle-anim, walk-anim, globe-spin