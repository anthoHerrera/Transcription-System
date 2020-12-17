var playing = false;
var rewind_value = 3.0;
var forward_value = 3.0;
var slow_value = 0.5;
var speed_value = 2.0;

var keyPlayPause = 'esc';
var keyslow = 'f1';
var keySpeed = 'f2';
var keyRewind = 'f3';
var keyForward = 'f4';

document.getElementById("videoLocal").style.display = "none";
document.getElementById("controls").style.display = "none";

document.getElementById('pauseKey').innerHTML = '<strong>' + keyPlayPause.toUpperCase() + '</strong>';
document.getElementById('slowKey').innerHTML = '<strong>' + keyslow.toUpperCase() + '</strong>';
document.getElementById('speedKey').innerHTML = '<strong>' + keySpeed.toUpperCase() + '</strong>';
document.getElementById('rewindKey').innerHTML = '<strong>' + keyRewind.toUpperCase() + '</strong>';
document.getElementById('forwardKey').innerHTML = '<strong>' + keyForward.toUpperCase() + '</strong>';

window.document.addEventListener('keydown', (e) => {
    e.preventDefault();
    Mousetrap.bind(window.keyPlayPause, function() {
        playVideo();
    });
    Mousetrap.bind(keyslow, function() {
        slowDown();
    });
    Mousetrap.bind(keySpeed, function() {
        speedUp();
    });
    Mousetrap.bind(keyRewind, function() {
        rewind();
    });
    Mousetrap.bind(window.keyForward, function() {
        forward();
    });
    /*if(e.key == 'Escape' ) {
        playVideo();
    }else if(e.key == 'F1') {
        slowDown();
    }else if(e.key == 'F2') {
        speedUp();
    }else if(e.key == 'F3') {
        rewind();
    }else if(e.key == 'F4') {
        forward();
    }*/

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
    //console.log(formatTime(videofile.currentTime)); timestamp
    
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
    console.log( window.slow_value);
    videofile.playbackRate = window.slow_value;
}
function speedUp() {
    var videofile = document.getElementById("videoLocal");
    console.log(window.speed_value);
    videofile.playbackRate = window.speed_value;
}

function rewind() {
    var videofile = document.getElementById("videoLocal");
    console.log(window.rewind_value);
    videofile.currentTime -= window.rewind_value;
}

function forward() {
    var videofile = document.getElementById("videoLocal");
    console.log(window.forward_value);
    videofile.currentTime += window.forward_value;
}

function formatTime(seconds) {
    hours = Math.floor(seconds / 3600);
    hours = (hours >= 10) ? hours : "0" + hours;
    sec = seconds % 3600
    minutes = Math.floor(sec / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(sec % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}