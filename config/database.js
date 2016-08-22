var mysql      = require('mysql');
var connection = mysql.createConnection({
  port     : 3000,
  user     : 'root',
  password : 'root',
  database : 'Matcha'
});

connection.connect()


module.exports = connection