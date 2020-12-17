playing = false;
document.getElementById("videoLocal").style.display = "none";
document.getElementById("controls").style.display = "none";
document.getElementById("message").style.display = "none";


playBtn     = 'Escape'
slowBtn     = 'F1'
speedBtn    = 'F2'
rwBtn       = 'F3'
fwBtn       = 'F4'



window.document.addEventListener('keydown', manejarControles );

function manejarControles(e){
    e.preventDefault();
    if(e.key == playBtn  ) {
        playVideo();
    }else if(e.key == slowBtn) {
        slowDown();
    }else if(e.key == speedBtn) {
        speedUp();
    }else if(e.key == rwBtn) {
        rewind();
    }else if(e.key == fwBtn) {
        forward();
    }

}


idRecibido=''
function manejarBotonesModal(valor){
    window.document.removeEventListener('keydown', manejarControles );
    
    idRecibido=valor;
    console.log(idRecibido);
    document.getElementById("message").style.display = "block";
    window.document.addEventListener('keydown', obtenerPress );
}

function obtenerPress(e){
    console.log(e.key)
    if(idRecibido=='re'){
        rwBtn=e.key;
    }else if(idRecibido=='sl') {
        slowBtn=e.key;
    }else if(idRecibido=='pp'){
        playBtn=e.key;
    }else if(idRecibido=='su'){
        speedBtn=e.key;
    }else if(idRecibido=='fw'){
        fwBtn=e.key;
    }
    document.getElementById("message").style.display = "none";
    setLabels();
    window.document.removeEventListener('keydown', obtenerPress );
    window.document.addEventListener('keydown',  manejarControles);
}

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});


function setLabelsBtn(){
    var re = document.getElementById("re");
    var t1 = document.createTextNode(rwBtn);
    re.appendChild(t1);

    var sl = document.getElementById("sl");
    var t2 = document.createTextNode(slowBtn);
    sl.appendChild(t2);

    var pp = document.getElementById("pp");
    var t3 = document.createTextNode(playBtn);
    pp.appendChild(t3);

    var su = document.getElementById("su");
    var t4 = document.createTextNode(speedBtn);
    su.appendChild(t4);

    var fw = document.getElementById("fw");
    var t5= document.createTextNode(fwBtn);
    fw.appendChild(t5);
}

function setLabelsMdl(){
    var re = document.getElementById("p-re");
    var t1 = document.createTextNode(rwBtn);
    re.appendChild(t1);

    var sl = document.getElementById("p-sl");
    var t2 = document.createTextNode(slowBtn);
    sl.appendChild(t2);

    var pp = document.getElementById("p-pp");
    var t3 = document.createTextNode(playBtn);
    pp.appendChild(t3);

    var su = document.getElementById("p-su");
    var t4 = document.createTextNode(speedBtn);
    su.appendChild(t4);

    var fw = document.getElementById("p-fw");
    var t5= document.createTextNode(fwBtn);
    fw.appendChild(t5);
}

function setLabels(){
    setLabelsBtn();
    setLabelsMdl();
}


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
