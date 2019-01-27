var http = require('http');
var mysql = require('mysql');
var url = require('url');

const server = http.createServer(function (req, res) {

var q = url.parse(req.url, true);

var qdata = q.query;

console.log("##########");
console.log(q.query);
console.log(qdata.table);
console.log("##########");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "anotherdb"
});

con.connect(function(err) {
  if (err) throw err;
//  con.query("SELECT address FROM customers where name = 'ABC Company'", function (err, result, fields) {
  con.query("SELECT address FROM " + qdata.table + " where name = '" + qdata.name + "'", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].address);
    var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>' + result[0].address + '</body></html>';
    res.write(reo, 'utf-8');
    res.end(); //end the response
  });
});

}).listen(8080);
