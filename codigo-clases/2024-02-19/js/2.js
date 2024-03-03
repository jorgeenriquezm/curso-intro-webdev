const formulario = document.querySelector('form')
const fecha1 = document.querySelector('#fecha1')
const fecha2 = document.querySelector('#fecha2')
const respuesta = document.querySelector('#respuesta')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fechaInicial = new Date(fecha1.value)
    const fechaFinal = new Date(fecha2.value)
    //Sería recomendable hacer control de errores y verificar
    //que ambos campos tienen valor o sacar un mensaje de error.
    if(fechaFinal>fechaInicial){
        const msTranscurridos = fechaFinal - fechaInicial
        const diasTranscurridos = msTranscurridos / 1000 / 60 / 60 / 24
        respuesta.innerHTML=`La diferencia es de ${diasTranscurridos} días.`
    }else{
        respuesta.innerHTML=':('
        alert('La segunda fecha tiene que ser posterior a la primera.')
    }
})