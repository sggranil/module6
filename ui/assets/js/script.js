    
    // getting a data

    var textBox = document.getElementById('count');
    
    textBox.addEventListener ('keyup', e => {
        if (e.key === 'Enter') {

            var setComment = textBox.value;
            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {

                        var comment = request.responseText;
                        comments = JSON.parse(comment);

                        var nval = ""; // empty list

                        for (i = 0; i < comments.length; i++) {
                            nval += comments[i] + "<br>";
                        }

                        document.getElementById('commentList').innerHTML = nval;

                        alert('Insert successfully');
                    } else {
                        alert('Failed');
                    }
                }
            }   
                request.open('GET', '/show-comment?comment=' + setComment, true);
                request.send(null);
        }
    }, false);