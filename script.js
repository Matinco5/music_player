let progress = document.querySelector("#progress");
let song = document.querySelector("#song")
let controlIcon = document.querySelector("#cntrlIcon ")

// song.onloadedmetadata = function(){
//      progress.max = song.duration;
//      progress.value = song.currentTime
// }



function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause()
        controlIcon.classList.add("fa-play")
        controlIcon.classList.remove("fa-pause")
    }
    else{
        song.play()
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")
    }
     
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    }, 1000)
}

//controlling the play/pause with the space bar
document.addEventListener("keydown", function (e) {
    if (e.code === "Space") { // Check if the spacebar is pressed
        if (song.paused) {
            song.play(); // Play the song if it is paused
        } else {
            song.pause(); // Pause the song if it is playing
        }
        e.preventDefault(); // Prevent the default browser behavior
    }
});

controlIcon.addEventListener("click", playPause)

progress.addEventListener("change", function (){
    song.play()
    song.currentTime = progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");

})