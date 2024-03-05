//Instalamos lo módulos necesarios, express y mysql
const express = require('express')
var mysql = require('mysql')
//Instalamos CORS que nos hace falta para poder trabajar en loca
//Ahora vamos a autorizar todas las peticiones que nos lleguen
//Luego en producción tenemos que quitar esto
var cors = require('cors')
//y el middleware para poder trabajar con json
var json = require('json');
//Inicializamos app
const app = express()
const port = 3000
//Le decimos que usaremos estos cors
app.use(cors())
//Inicializamos la conexión con la BBDD
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tienda'
});
//Creamos la conexión fuera de todo endpoint para que la haga una única vez
connection.connect(); 
//Creamos nuestro primer endpoint para obtener los usuarios
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', function (error, resultado, fields) {
    if (error){
      //connection.end();
      throw error;
    }
    res.status(200).json(resultado)
  })  
})
  //Y al final, un endpoint genérico por si no ha capturado uno anterior
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  //Arrancamos la aplicación
  app.listen(port, () => {
    console.log(`api inicializada en el puerto: ${port}`)
  })
