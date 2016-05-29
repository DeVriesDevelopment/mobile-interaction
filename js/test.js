var Test = function()
{
    this.id = null;
    this.name = null;
}


Test.prototype.load = function(id, _callback)
{
    var testObject = this;
    database.executeQuery('Select * FROM test where test_id=' + id, function(tx, results){
        testObject.id = results.rows[0].test_id;
        testObject.name = results.rows[0].name;
        _callback();
    });
}
