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


//Ejemplo explicativo para pregunta en clase, se puede ignorar
app.post('/verify-email', (req, res) => {
  //console.log(req.body)
  connection.query(`SELECT * from proyectos WHERE titulo="${req.body.email}"`, function (error, results, fields) {
    if (error) throw error;
    console.log(results)
    if(results.length>0){
      res.status(200).json({msg:'Email encontrado ✅'})
    }else{
      res.status(404).json({msg:'No encontramos ese usuario ✅'})
    }
  });
})

//Creamos un endpoint de tipo delete y recibimos el id en un json
app.delete('/proyectos/delete', (req, res) => {
  //Nos acordamos de ponerle el LIMIT 1
  connection.query(`DELETE from proyectos WHERE id=${req.body.id} LIMIT 1`, function (error, results, fields) {
    if (error) throw error;
    console.log(results)
    //affectedRows nos dice cuantos registros se han visto afectados...
    if(results.affectedRows>0){
      res.status(200).json({msg:`Proyecto ${req.body.id} borrado con éxito ✅`})
    }else{
      res.status(404).json({msg:`No se encuentra el proyecto ${req.body.id} 🚫`})
    }
  });
})








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