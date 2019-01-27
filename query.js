var http = require('http');
var mysql = require('mysql');

const server = http.createServer(function (req, res) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "anotherdb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].name);
    var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>' + result[0].name + '</body></html>';
    res.write(reo, 'utf-8');
    res.end(); //end the response
  });
});

}).listen(8080);
