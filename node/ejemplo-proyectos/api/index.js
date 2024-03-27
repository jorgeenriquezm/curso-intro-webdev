let express    = require('express')
let multer     = require('multer')
let mysql      = require('mysql')

const app = express()
const port = 3000

//Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../img/projects')
    },
    filename: function (req, file, cb) {
      let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      if(file.mimetype==='image/png'){
        uniqueSuffix+='.png'
      }
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage })

//Configuración de la BBDD
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'projects'
}); 
connection.connect();

//Endpoint para subir proyectos, el formulario tiene que ser vía post, con enctype multipart
//y que el campo que contiene el fichero tenga de name 'imagen'
app.post('/api/projects/add', upload.single('imagen'), (req, res)=>{
    /*
    console.log(req.file) req.file contiene el fichero que hemos subido 
    console.log(req.body.titulo) req.body contiene todos los campos de texto
    */
    connection.query(`INSERT INTO projects (titulo, ruta) VALUES ('${req.body.titulo}','${req.file.destination+req.file.filename}')`, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({code:200, msg:"Proyecto guardado con éxito"})
    }); 
    
})

app.listen(port, () => {
  console.log(`API arrancada...`)
})