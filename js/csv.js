var testName;

function _saveCsv(csv) {
    console.log("testtest")
    idfromtest = localStorage.testId;
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory, function (dirEntry) {
        console.log('file system open: ' + dirEntry.name);
        var isAppend = false;
        createFolder(dirEntry, testName)
    }, onErrorLoadFs);

    function createFile(dirEntry, fileName, isAppend) {
        // Creates a new file or returns the file if it already exists.
        dirEntry.getFile(fileName, {create: true, exclusive: false}, function (fileEntry) {

            writeFile(fileEntry);

        }, onErrorCreateFile);

    }

    function createFolder(rootDirEntry, testName) {
        rootDirEntry.getDirectory('mobile-interaction', {create: true}, function (dirEntry) {
            dirEntry.getDirectory(testName, {create: true}, function (subDirEntry) {
                createFile(subDirEntry, testName + "_" + localStorage.subTestType + ".csv", false);
            }, onErrorGetDir);
        }, onErrorGetDir);
    }

    function onErrorGetDir() {
        console.log("directory nog get");
    }

    function onErrorCreateFile() {
        console.log("error create file");
    }

    function onErrorLoadFs() {
        console.log("error loading filesystem");
    }

    function writeFile(fileEntry, dataObj) {
        fileEntry.createWriter(function (fileWriter) {

            fileWriter.onwriteend = function() {
                console.log("Successful file read...");
            };

            fileWriter.onerror = function (e) {
                console.log("Failed file read: " + e.toString());
            };

            // If data object is not passed in,
            // create a new Blob instead.
            if (!dataObj) {
                dataObj = new Blob([csv], { type: 'text/plain' });
            }

            fileWriter.write(dataObj)
            completeSubtest(localStorage.testId, localStorage.subTestType);
        });
    }
}

function saveCsv(content)
{
    database.executeQuery('SELECT * FROM test WHERE test_id=' + localStorage.testId, function (tx, results)
    {
        testName = results.rows[0].name;
        _saveCsv(content)
    })
}