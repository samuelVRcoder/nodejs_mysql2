var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "changeme",
  user: "changeme",
  password: "changeme"
});

con.connect(function(err) {
  if (err){ throw err;}
  console.log("Connected!");
});