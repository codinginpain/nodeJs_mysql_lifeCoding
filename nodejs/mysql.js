var mysql      = require('mysql'); //require mysql module;
var connection = mysql.createConnection({  
  host     : 'localhost',
  user     : 'nodejs',
  password : 'wjdrl123',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
  console.log(results[0].solution);
});
 
connection.end();