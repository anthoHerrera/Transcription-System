var snippets = { 'Interviewer': 'f7' };

var snippetList = document.getElementById('snippetList');
var ul = document.createElement("ul");
ul.classList.add("list-group");
ul.classList.add("list-group-flush");
snippetList.appendChild(ul);
for (key in snippets) {
    var li = document.createElement("li");
    //li.appendChild(document.createTextNode(key + ' press key ' + '<strong>' + snippets[key].toUpperCase() + '</strong>' + ' to insert'));
    li.innerHTML = key + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<strong>' + snippets[key].toUpperCase() + '</strong>';
    li.classList.add("list-group-item");
    ul.appendChild(li);
}
function updateSnippetList() {
    var snippetList = document.getElementById('snippetList');
    while (snippetList.lastElementChild) {
        snippetList.removeChild(snippetList.lastElementChild);
    }
    var ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("list-group-flush");
    snippetList.appendChild(ul);
    for (key in snippets) {
        var li = document.createElement("li");
        //li.appendChild(document.createTextNode(key + ' ' + snippets[key].toUpperCase()));
        li.innerHTML = key + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<strong>' + snippets[key].toUpperCase() + '</strong>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
}

function addSnippets() {
    console.log(window.snippets);
    document.getElementById('triggerBtn').innerHTML = 'Press Key';
    var newName = document.getElementById("nameInput").value;
    Mousetrap.record(function (sequence) {
        console.log('registrando');
        console.log(newName);
        window.snippets[newName] = sequence.join(' ');
        updateSnippetList();
        document.getElementById("nameInput").value = '';
        document.getElementById('triggerBtn').innerHTML = 'assign trigger';
    });

}

function snippetEditor(event) {
    for (key in window.snippets) {
        console.log('snip ' + window.snippets[key]);
        console.log('event which ' + event.which);
        console.log('code ' + dict_keysCodes[window.snippets[key]]);

        if (event.which == dict_keysCodes[window.snippets[key]]) {
            console.log('ento if');
            var videofile = document.getElementById("videoLocal");
            return key + ' in ' + '<a href="#">' + formatTime(videofile.currentTime) + '</a>' + ': ';
        }
    }
}
