const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span h5');
const timerBar = document.querySelector('.timer div');

media.addEventListener('timeupdate', setTime);
timerWrapper.addEventListener("click", seek);

function setTime() {
    hourValue = Math.floor(media.currentTime / 3600);
    hourValue = (hourValue >= 10) ? hourValue : "0" + hourValue;
    sec = media.currentTime % 3600
    minuteValue = Math.floor(sec / 60);
    minuteValue = (minuteValue >= 10) ? minuteValue : "0" + minuteValue;
    secondValue = Math.floor(sec % 60);
    secondValue = (secondValue >= 10) ? secondValue : "0" + secondValue;

    //let mediaTime = minuteValue + ':' + secondValue;
    let mediaTime = '[' + hourValue + ':' + minuteValue + ':' + secondValue + ']';
    timer.textContent = mediaTime + '/' + window.formatTime(media.duration);

    let barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
    timerBar.style.width = barLength + 'px';
}

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    media.currentTime = percent * media.duration;
    timerBar.value = percent / 100;
}