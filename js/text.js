
window.onload = function() {
    var sentences = ["Om 18 uur zal ik bij de Jumbo zijn", "is het gelukt om de opdracht af te krijgen?", "Toy Story is echt een leuke film!"]
    var currentSentence = 0;
    var inputCount = 0;
    var errors = 0;
    var isWrong = false;
    var start;
    var completionTime = 0;
    var isFirst = true;

    loadSentence();
    document.getElementById("textarea").focus();
    document.getElementById("textarea").oninput = checkforErrors;

    createSubtest(localStorage.testId, localStorage.subTestType);

    function loadSentence() {
        var sentenceArea = document.getElementById('sentence');
        sentenceArea.innerHTML = sentences[currentSentence];
    }

    function checkforErrors(event) {
        if(isFirst)
        {
            isFirst = false;
            start = new Date();
        }
        if (sentences[currentSentence] == event.target.value) {
            if (currentSentence < 2) {
                nextSentence();
                return;
            }
            else {
                complete();
                return;
            }
        }
        inputCount = event.target.value.length;
        substring = sentences[currentSentence].substring(0, inputCount);

        if (substring == event.target.value) {
            event.target.style.color = '#000000';
            isWrong = false;
        }
        else {
            event.target.style.color = '#FF0000';
            if (isWrong == false) {
                errors++;
                isWrong = true;
            }
        }
    }

    function nextSentence() {
        currentSentence++;
        loadSentence();
        document.getElementById("textarea").focus();
        document.getElementById("textarea").value = '';
    }

    function complete() {
        completionTime = new Date() - start;
        createCsv();
    }

    function createCsv() {
        var testId = localStorage.testId;
        database.executeQuery('SELECT * FROM test WHERE test_id=' + testId, function (tx, results) {
            var data = [["Name", "Errors", "Time (in ms)"], [results.rows[0].name, errors, completionTime]];
            var csvContent = "";
            data.forEach(function (infoArray, index) {

                dataString = infoArray.join(",");
                csvContent += index < data.length ? dataString + "\n" : dataString;

            });
            saveCsv(csvContent);
        })
    }
}