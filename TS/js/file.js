var playing = false;
var rewind_value = 3.0;
var forward_value = 3.0;
var slow_value = 0.5;
var speed_value = 2.0;
var flag = false;

var keyPlayPause = 'esc'
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

document.getElementById("nameInput").addEventListener('focus', (event) => {
    window.flag = true;
});
  
document.getElementById("nameInput").addEventListener('blur', (event) => {
    window.flag = false;
});

window.document.addEventListener('keydown', (e) => {
    
    if(!window.flag) {
        e.preventDefault();
    }
    
    console.log(e.keyCode);
    Mousetrap.bind(window.keyPlayPause, function() {
        playVideo(); 
        return false;  
    });
    Mousetrap.bind(window.keyslow, function() {
        slowDown();
        return false;
    });
    Mousetrap.bind(window.keySpeed, function() {
        speedUp();
        return false;   
    });
    Mousetrap.bind(window.keyRewind, function() {
        rewind();
        return false;
    });
    Mousetrap.bind(window.keyForward, function() {
        forward();
        return false;
    });
    
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
    return '[' + hours + ":" + minutes + ":" + seconds + ']';
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function formatDate() {
    const o_date = new Intl.DateTimeFormat;
    const f_date = (m_ca, m_it) => Object({...m_ca, [m_it.type]: m_it.value});
    const m_date = o_date.formatToParts().reduce(f_date, {});
    return m_date.day + '-' + m_date.month + '-' + m_date.year;
}

function timeCode(code) {
    var videofile = document.getElementById("videoLocal");
    console.log(code.innerHTML);
    var a = code.replace('[','');
    var b = a.replace(']','');
    console.log(b);
    var stamp = b.split(':')
    var hh = stamp[0];
    var min = stamp[1];
    var sec = stamp[2];
    console.log(hh);
    console.log(min);
    console.log(sec);
    videofile.currentTime = Number(hh)*3600 + Number(min)*60 + Number(sec);
}