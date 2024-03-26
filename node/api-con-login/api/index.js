const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const port = 3000
app.use(bodyParser.json())

app.use(session({
    secret: 'me gusta la pizza',
    maxAge:60000,
    resave: false,
    saveUninitialized: false
  }))

function isAuthenticated (req, res, next) {
    if (req.session.user) next()
    else next('route')
}

app.post('/login', (req, res) => {
    const {user, pwd} = req.body
    if(user && pwd){
        if(user==='jorge' && pwd===1234){
            //Guardamos el usuario en la sesión
            req.session.user = req.body.user
            req.session.sessionID = req.sessionID
            req.session.authenticated = true
            console.log(req.sessionID)
            console.log(req.session)
            res.status(200).json({msg:"Login correcto"})    
        }else{
            res.status(403).json({msg:"Login incorrecto"})    
        }
    }else{
        res.status(400).json({msg:"Faltan datos para logearse"})
    }
})


app.get('/dashboard', isAuthenticated,(req, res) => {
  if(req.session.authenticated){
    res.send('Puede entrar al contenido protegido')
  }else{
    res.send('Lo mandamos a la pantalla de login')
  }
})

app.listen(port, () => {
  console.log(`API arrancada en puerto [${port}]`)
})