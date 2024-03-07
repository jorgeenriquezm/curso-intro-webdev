console.log('Enviamos la info...')
fetch('http://localhost:3000/proyectos/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "titulo":"Web para Tabakalera",
        "imagen":"https://www.tabakalera.eus/tabakalera-rrss.jpg",
        "autor": "Jorge"
    })
})
   .then(response => {
    if(response.status==200){
        //Todo ha ido ok
        console.log("Info recibida, responde OK, sacamos el popup...")
        setTimeout(()=>{
            console.log('... y lo ocultamos pasados 2 segundos.')
        },2000)
    }else{
        //Acciones si no recibimos un 200
    }
   })