playing = false;
document.getElementById("videoLocal").style.display = "none";
document.getElementById("controls").style.display = "none";

window.document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if(e.key == 'Escape' ) {
        playVideo();
    }else if(e.key == 'F1') {
        slowDown();
    }else if(e.key == 'F2') {
        speedUp();
    }else if(e.key == 'F3') {
        rewind();
    }else if(e.key == 'F4') {
        forward();
    }

});

function loadLocalVideo() {
    var player = document.getElementById("videoLocal");
    var currentVideo = document.getElementById("currentVideo");
    var selectedLocalVideo = document.getElementById("newFile").files[0];
    currentVideo.setAttribute("src", URL.createObjectURL(selectedLocalVideo));
    var divElement = document.getElementById("test");
    
    if (divElement.style.display === "none") {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";    
    }
    document.getElementById("videoLocal").style.display = "block";
    document.getElementById("controls").style.display = "block";
    player.load();
    player.play();
    playing = true;

}

function playVideo() {
    var videofile = document.getElementById("videoLocal");
    videofile.playbackRate = 1.0;
    if(playing) {
        document.getElementById("pausePlay").className = "fas fa-play";
        videofile.pause();
        playing = false;
    }else {
        document.getElementById("pausePlay").className = "fas fa-pause-circle";
        videofile.play();
        playing = true;
    }
    
}

function slowDown() {
    var videofile = document.getElementById("videoLocal");
    videofile.playbackRate = 0.5;
}
function speedUp() {
    var videofile = document.getElementById("videoLocal");
    videofile.playbackRate = 2.0;
}

function rewind() {
    var videofile = document.getElementById("videoLocal");
    videofile.currentTime -= 5.0;
}

function forward() {
    var videofile = document.getElementById("videoLocal");
    videofile.currentTime += 5.0;
}
