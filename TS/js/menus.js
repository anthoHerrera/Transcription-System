//keycodes
var dict_keysCodes = {
    'esc': 27, 'right': 39, 'left': 37, 'up': 38, 'down': 40, 'f1': 112, 'f2': 113,
    'f3': 114, 'f4': 115, 'f5': 116, 'f6': 117, 'f7': 118, 'f8': 119, 'f9': 120, 'f10': 121, 'f11': 122, 'f12': 123
};
//default values
document.getElementById('input_rewind').value = window.rewind_value;
document.getElementById('input_forward').value = window.forward_value;
document.getElementById('input_slow').value = window.slow_value;
document.getElementById('input_fast').value = window.speed_value;

//video settings
function updateVideoSettings() {
    window.rewind_value = Number(document.getElementById('input_rewind').value);
    window.forward_value = Number(document.getElementById('input_forward').value);
    window.slow_value = Number(document.getElementById('input_slow').value);
    window.speed_value = Number(document.getElementById('input_fast').value);
}

//shorcuts settings
function recordSequence() {
    document.getElementById('pauseBtn').innerHTML = 'Press any key';
    Mousetrap.record(function (sequence) {
        Mousetrap.unbind(window.keyPlayPause);
        window.keyPlayPause = sequence.join(' ');
        console.log(window.keyPlayPause);
        document.getElementById('pauseKey').innerHTML = '<strong>' + window.keyPlayPause.toUpperCase() + '</strong>';
        document.getElementById('pauseBtn').innerHTML = 'Change Key';
        document.getElementById('pp').innerHTML = '<svg xmlns = "http://www.w3.org/2000/svg" width = "20" height = "20"  id = "pausePlay" fill = "currentColor" class="bi bi-pause-fill" viewBox = "0 0 16 16" ><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" /></svg > ' + window.keyPlayPause.toUpperCase();
    });
}

function recordSequence2() {
    document.getElementById('forwardBtn').innerHTML = 'Press any key';
    Mousetrap.record(function (sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyForward = sequence.join(' ');
        console.log(window.keyForward);
        document.getElementById('forwardKey').innerHTML = '<strong>' + window.keyForward.toUpperCase() + '</strong>';
        document.getElementById('forwardBtn').innerHTML = 'Change Key';
        document.getElementById('fw').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" /><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" /></svg> ' + window.keyForward.toUpperCase();
    });
}

function recordSequence3() {
    document.getElementById('rewindBtn').innerHTML = 'Press any key';
    Mousetrap.record(function (sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyRewind = sequence.join(' ');
        console.log(window.keyRewind);
        document.getElementById('rewindKey').innerHTML = '<strong>' + window.keyRewind.toUpperCase() + '</strong>';
        document.getElementById('rewindBtn').innerHTML = 'Change Key';
        document.getElementById('re').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" /><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" /></svg> ' + window.keyRewind.toUpperCase();
    });
}

function recordSequence4() {
    document.getElementById('speedBtn').innerHTML = 'Press any key';
    Mousetrap.record(function (sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keySpeed = sequence.join(' ');
        console.log(window.keySpeed);
        document.getElementById('speedKey').innerHTML = '<strong>' + window.keySpeed.toUpperCase() + '</strong>';
        document.getElementById('speedBtn').innerHTML = 'Change Key';
        document.getElementById('su').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" /><path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" /></svg> ' + window.keySpeed.toUpperCase();

    });
}

function recordSequence5() {
    document.getElementById('slowBtn').innerHTML = 'Press any key';
    Mousetrap.record(function (sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyslow = sequence.join(' ');
        console.log(window.keyslow);
        document.getElementById('slowKey').innerHTML = '<strong>' + window.keyslow.toUpperCase() + '</strong>';
        document.getElementById('slowBtn').innerHTML = 'Change Key';
        document.getElementById('sl').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width = "20" height = "20" fill = "currentColor" class="bi bi-chevron-double-left" viewBox = "0 0 16 16" ><path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /> <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg > ' + window.keyslow.toUpperCase();
    });
}

