//keycodes
var dict_keysCodes = {'esc': 27, 'right': 39, 'left': 37, 'up': 38, 'down': 40, 'f1': 112, 'f2': 113,
    'f3': 114, 'f4': 115, 'f5': 116, 'f6': 117, 'f7': 118, 'f8': 119, 'f9': 120, 'f10': 121, 'f11': 122, 'f12': 123};
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
    Mousetrap.record(function(sequence) {
        Mousetrap.unbind(window.keyPlayPause);
        window.keyPlayPause = sequence.join(' ');   
        console.log(window.keyPlayPause);
        document.getElementById('pauseKey').innerHTML = '<strong>' + window.keyPlayPause.toUpperCase() + '</strong>';
        document.getElementById('pauseBtn').innerHTML = 'Change Key';
        document.getElementById('pp').innerHTML = '<i class="fas fa-pause-circle" id="pausePlay"></i> ' + window.keyPlayPause.toUpperCase();
    });
}

function recordSequence2() {
    document.getElementById('forwardBtn').innerHTML = 'Press any key';
    Mousetrap.record(function(sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyForward = sequence.join(' ');
        console.log(window.keyForward);
        document.getElementById('forwardKey').innerHTML = '<strong>' + window.keyForward.toUpperCase() + '</strong>';
        document.getElementById('forwardBtn').innerHTML = 'Change Key';
        document.getElementById('fw').innerHTML = '<i class="fas fa-redo fa-sm"></i> ' + window.keyForward.toUpperCase();
    });
}

function recordSequence3() {
    document.getElementById('rewindBtn').innerHTML = 'Press any key';
    Mousetrap.record(function(sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyRewind = sequence.join(' ');
        console.log(window.keyRewind);
        document.getElementById('rewindKey').innerHTML = '<strong>' + window.keyRewind.toUpperCase() + '</strong>';
        document.getElementById('rewindBtn').innerHTML = 'Change Key';
        document.getElementById('re').innerHTML = '<i class="fas fa-undo fa-sm"></i> ' + window.keyRewind.toUpperCase();
    });
}

function recordSequence4() {
    document.getElementById('speedBtn').innerHTML = 'Press any key';
    Mousetrap.record(function(sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keySpeed= sequence.join(' ');
        console.log(window.keySpeed);
        document.getElementById('speedKey').innerHTML = '<strong>' + window.keySpeed.toUpperCase() + '</strong>';
        document.getElementById('speedBtn').innerHTML = 'Change Key';
        document.getElementById('su').innerHTML = '<i class="fas fa-forward fa-sm"></i> ' + window.keySpeed.toUpperCase();
        
    });
}

function recordSequence5() {
    document.getElementById('slowBtn').innerHTML = 'Press any key';
    Mousetrap.record(function(sequence) {
        //Mousetrap.unbind(window.keyPlayPause);
        window.keyslow = sequence.join(' ');
        console.log(window.keyslow);
        document.getElementById('slowKey').innerHTML = '<strong>' + window.keyslow.toUpperCase() + '</strong>';
        document.getElementById('slowBtn').innerHTML = 'Change Key';
        document.getElementById('sl').innerHTML = '<i class="fas fa-backward fa-sm fa-sm"></i> ' + window.keyslow.toUpperCase();
    });
}

