const express = require('express')
var mysql      = require('mysql');
var json = require('json');
var bodyParser = require('body-parser')

const app = express()
const port = 3000
//Inicializamos body-parser para que procese la info recibidida por formularios normales o vía json
app.use(bodyParser.urlencoded({ extended: false })) //para formularios
app.use(bodyParser.json()) //para json

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tienda'
});
connection.connect();


//Añadimos un endpoint que recibirá por POST. Para poder procesar esta info recibida,
//hemos tenido que instalar el paquete body-parser
app.post('/proyectos/add', (req, res) => {
  console.log(req.body)
  res.status(200).json(req.body)
})

app.get('/usuarios', (req, res) => {
  connection.query('SELECT * from usuarios', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})


app.get('/', (req, res) => {
  res.send('Raiz de la api')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})