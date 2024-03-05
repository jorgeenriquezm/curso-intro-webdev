const express = require('express')
var mysql = require('mysql');
var json = require('json');
const app = express()
const port = 3000
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tienda'
});

app.get('/usuarios', (req, res) => {
    connection.connect();
 
    connection.query('SELECT * FROM usuarios', function (error, resultado, fields) {
    if (error) throw error;
    //console.log('Los usuarios son: ', resultado);
    res.json(resultado)

    });
    
    connection.end();
  })
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`api inicializada en el puerto: ${port}`)
})
