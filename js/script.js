$(document).ready(function() {
/* On button click to get shortest word */
    $('#getShortestWord').click(function() {
        var inputString = $('#stringInput').val();
        /* split words per space and turn it to an array */
        var words = inputString.split(/\s+/);
        var shortestLength = Infinity;
        var shortestWord = "";

        /* Loop to isolate each word */
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var wordLength = word.length;

            /* get shortest word length */
            if (wordLength < shortestLength) {
                shortestLength = wordLength;
                shortestWord = word;
            }
        }
        
    /* Display Result */
    $('#result').text('OUTPUT: ' + shortestLength + ' – BECAUSE THE SHORTEST WORD IS "' + shortestWord + '".');
    });
});