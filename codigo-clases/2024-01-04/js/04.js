let boton = document.querySelector('button')

//Con addEventListener empezamos a escuchar un evento (primer parámetro)
//de un elemento seleccionado previamente
//El segundo parámetro es la función que ocurrirá cuando ocurra ese evento
boton.addEventListener("click", function(evento){
    //esta función recibe como parámetro "evento", que contiene toda la información
    //del mismo. Mas adelante nos servirá para saber qué elemento hemos clicado
    console.log("Me has clicado")
    document.querySelector("body").style.backgroundColor="red"
    boton.style.display='none'
})