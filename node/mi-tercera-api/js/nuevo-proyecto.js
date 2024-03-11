const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const response = fetch("http://localhost:3000/proyectos/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo:document.querySelector('#titulo').value,
        imagen:document.querySelector('#imagen').value,
        descripcion:document.querySelector('#descripcion').value,
        fecha:document.querySelector('#fecha').value,
        link:document.querySelector('#link').value,
      }),
    })
    .then(respuesta=>respuesta.json())
    .then(parseada=>{
        document.querySelector('#status').innerHTML=parseada.msg
        formulario.reset()
    })
})

