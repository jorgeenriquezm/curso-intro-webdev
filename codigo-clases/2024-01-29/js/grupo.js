let botones = document.querySelectorAll('button')
botones.forEach(boton=>{
    boton.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
    })
})