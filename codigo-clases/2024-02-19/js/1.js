const formulario = document.querySelector('form')
const fecha = document.querySelector('#fecha')
const respuesta = document.querySelector('#respuesta')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(fecha.value)
    const fechaElegida = new Date(fecha.value)
    const ahora = new Date()
    if(ahora>fechaElegida){
        const msTranscurridos = ahora - fechaElegida
        const diasTranscurridos = msTranscurridos / 1000 / 60 / 60 / 24
        respuesta.innerHTML=`Han pasado ${diasTranscurridos} días.`
    }else{
        respuesta.innerHTML=':('
        alert('La fecha elegida tiene que ser pasada...')
    }
})