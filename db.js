var mysql = require('mysql');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?db=anotherdb';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.db); //returns 'february'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE " + qdata.db, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
