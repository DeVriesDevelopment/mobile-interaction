var submenuArray = ["Target Selection staand", "Typing Test staand", "Target Selection fietsend", "Typing Test fietsend", "Target Selection Improved", "Typing Test improved"];

function getTests()
{
    database.executeQuery('SELECT * FROM test', function(tx, result)
    {
        var tests = result.rows;
        var returnHtml = '';

        for(var i = 0; i < tests.length; i++)
        {
            returnHtml += "<button class='test-button' onclick='setTestId(" + tests[i].test_id + ")'>" + tests[i].name + "</button><br/>";
        }
        var div = document.getElementById('tests').innerHTML = returnHtml;
    })
}

function setTestId(id)
{
    localStorage.testId = id;
    window.location.href = 'submenu.html';
}

function getHeader()
{
    var id = localStorage.testId;
    var test = new Test();
    test.load(id, function()
    {
        document.getElementById('header').innerHTML = test.name;
    })
}

function getSubmenu()
{
    var testId = localStorage.testId;
    database.executeQuery('SELECT * FROM subtest WHERE test_id='+testId, function(tx, results)
    {
        for(var i = 0; i < submenuArray.length; i++)
        {
            var returnHtml = '';
            var complete = getCompleted(i, results.rows);
            returnHtml += "<button class='submenu-button" + ((complete == true) ? " complete" : "") + "' onclick='redirectSubtest(" + i + ")'>" + submenuArray[i] + "</button>";
            returnHtml += (i % 2 == 1) ? "<br/>" : "";
            document.getElementById('submenu-content').innerHTML += returnHtml;
        }
    });
}
function getCompleted(type, results)
{
    for(var j = 0; j < results.length; j++)
    {
        if(type == results[j].subtest_type)
        {
            if(results[j].complete == 'true')
            {
                return true;
            }
        }
    }
    return false;
}

function redirectSubtest(type)
{
    if(type == 1 || type == 3 || type == 5)
    {
        url = "text.html";
    }else if(type == 0 || type == 2)
    {
        url = "target_selection/target_selection1en3.html";
    }
    else if(type == 4)
    {
        url = "target_selection/target_selection5.html";
    }
    localStorage.subTestType = type;
    window.location.href = url;
}

function createTest()
{
    var name = document.getElementById('test-input').value;
    database.executeQuery("INSERT INTO test (name) VALUES ('" + name + "')");
    window.location.href = 'tests.html';
}

function completeSubtest(test, type)
{
    database.executeQuery('UPDATE subtest SET complete="true" WHERE test_id =' + test + ' AND subtest_type=' + type, function(){
        if(type == 0 || type == 2 || type == 4)
        {
            window.location.href = '../submenu.html';
        }
        else
        {
            window.location.href = '/submenu.html';
        }
    });
}

function createSubtest(test, subtestType)
{
    database.executeQuery('SELECT * FROM subtest WHERE test_id='+test+" AND " + "subtest_type=" + subtestType, function(tx, results)
    {
        if(results.rows.length < 1)
        {
            database.executeQuery("INSERT INTO subtest (test_id, subtest_type, complete) VALUES (" + test + ", " + subtestType + ", 'false')");
        }
    });

}


