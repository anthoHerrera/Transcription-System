tinymce.init({
    selector: '#editor1',
    menubar: '',
    toolbar: 'bold italic | undo redo | downloadButton',


    setup: function(editor) {
        editor.ui.registry.addButton('downloadButton', {
            icon: "save",
            tooltip: 'Download',
            onAction: function (_) {
                var myContent = tinymce.get("editor1").getContent({ format: "text" });
                console.log(myContent);
                var textToSaveAsBlob = new Blob([myContent], {type:"text/plain"});
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = 'transcripcion_' + window.formatDate();
 
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                downloadLink.href = textToSaveAsURL;
                downloadLink.onclick = window.destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
 
                downloadLink.click();
             
            }
        });

        editor.on('keydown', function(e) {
            console.log('The Editor has initialized.');
      
            if(e.which == dict_keysCodes[window.keyPlayPause]) {
                window.playVideo();
                return false;
            }else if(e.which == dict_keysCodes[window.keyslow]) {
                window.slowDown();
                return false;
            }else if(e.which == dict_keysCodes[window.keySpeed]) {
                window.speedUp();
                return false;
            }else if(e.which == dict_keysCodes[window.keyRewind]) {
                window.rewind();
                return false;
            }else if(e.which == dict_keysCodes[window.keyForward]) {
                window.forward();
                return false;
            }else if(window.snippetEditor(e) != null) {
                editor.insertContent(window.snippetEditor(e));
                return false;
            }
        });

        editor.on('click', function (e) {
            if(e.target.nodeName == 'A') {
                console.log('Element clicked:', e.target.nodeName + ' ' + e.target.innerHTML);
                window.timeCode(e.target.innerHTML);
            }
            
          });

    }
});

