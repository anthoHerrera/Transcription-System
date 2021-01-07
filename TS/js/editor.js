tinymce.init({
    selector: '#editor1',
    menubar: '',
    toolbar: 'bold italic | undo redo | downloadButton AutoTranscriptButton',


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

        editor.ui.registry.addButton('AutoTranscriptButton', {
            icon: "temporary-placeholder",
            tooltip: 'AutoTranscrip',
            onAction: function (_) {
  
                if('webkitSpeechRecognition' in window) {
                    var speechRecognizer = new webkitSpeechRecognition();
                    speechRecognizer.continuous = true;
                    speechRecognizer.interimResults = true;
                    speechRecognizer.lang = 'en-US';
                    speechRecognizer.start();
            
                    var finalTranscripts = '';
            
                    speechRecognizer.onresult = function(event) {
                        
                        var interimTranscripts = '';
                        for(var i = event.resultIndex; i < event.results.length; i++){
                            var transcript = event.results[i][0].transcript;
                            console.log(event.results[i][0]);
                            transcript.replace("\n", "<br>");
                            if(event.results[i].isFinal) {
                                finalTranscripts += transcript;
                            }else{
                                interimTranscripts += transcript;
                            }
                        }
                        tinymce.activeEditor.setContent(finalTranscripts + '<span style="color: #999">' + interimTranscripts + '</span>');   
                    };
                    speechRecognizer.onerror = function (event) {
            
                    };
                }else {
                    result.innerHTML = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!!';
                }
             
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

