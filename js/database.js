var MbDatabase = function()
{
    this.db = window.openDatabase("mobile-interaction", 1.0, 'Mobile Interaction', 2 * 1024 * 1024);
    this.installer();
};

MbDatabase.prototype.executeQuery = function(query, successHandler)
{
    this.db.transaction(function(tx)
    {
        database.doQuery(tx, query, [], successHandler);
    });
}

MbDatabase.prototype.errorHandler = function(transaction, error, query)
{
    console.log("Error : " + error.message + " in " + query);
}

MbDatabase.prototype.doQuery = function(tx, query, values, successHandler) {
    tx.executeSql(query, values, successHandler, this.errorHandler);
}

MbDatabase.prototype.installer = function()
{
    if(getCookie('mob-installed') == 'true')
    {return;}
    this.executeQuery("CREATE TABLE IF NOT EXISTS test (test_id INTEGER PRIMARY KEY, name VARCHAR)");
    this.executeQuery("INSERT INTO test (name) VALUES ('test')");
    setCookie('mob-installed', 'true')
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

var database = new MbDatabase();

