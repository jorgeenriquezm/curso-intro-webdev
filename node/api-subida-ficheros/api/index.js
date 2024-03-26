const express = require('express')
const multer  = require('multer')
const app = express()
const port = 3000

//Creamos un objeto con toda la configuración de nuestro fichero
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    //Aquí no estamos comprobando que el nombre de fichero ya exista, deberíamos hacer eso o añadirle un "unique key"
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })

const upload = multer({ storage })
/*Creamos el endpoint que gestionará la subida de los ficheros
En el html es necesario que el campo de la imagen tenga este name ('foto' en este caso)
<input type="file" name="foto" />
y el enctype que sea multipart <form action="/upload" method="post" enctype="multipart/form-data">
*/
app.post('/upload', upload.single('foto'), (req, res)=>{
    res.json(req.file)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.listen(port, () => {
  console.log(`API arrancada`)
})