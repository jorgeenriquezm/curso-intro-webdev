const express = require('express')
var mysql      = require('mysql');
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'portfolio'
});
connection.connect();








app.post('/proyectos/add', (req, res) => {
  //console.log(req.body)
  connection.query(`INSERT INTO proyectos (imagen, titulo, descripcion, fecha, link) VALUES ("${req.body.imagen}","${req.body.titulo}", "${req.body.descripcion}", "${req.body.fecha}", "${req.body.link}");`, function (error, results, fields) {
    if (error) throw error;
    res.status(200).json({msg:'Proyecto añadido con éxito ✅'})
  });
})
app.get('/proyectos', (req, res) => {
  connection.query('SELECT * from proyectos', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results)
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Api arrancada en puerto: ${port}`)
})