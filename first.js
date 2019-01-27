var mysql = require('mysql');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?db=newdb';
var q = url.parse(adr, true);

console.log(q.db); //returns 'localhost:8080'

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
});
