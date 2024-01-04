let boton = document.querySelector('button')


boton.addEventListener("click", function(){
    console.log("Me has clicado")
    document.querySelector("body").style.backgroundColor="red"
    boton.style.display='none'
})