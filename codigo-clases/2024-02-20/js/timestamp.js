const contenedor = document.querySelector('#contenedor')
const tsFinal = new Date('2050-01-01').getTime()
const tsActual = Date.now()
const diferencia = tsFinal - tsActual

const anios2Ms = 365*24*60*60*1000
const meses2Ms = 30*24*60*60*1000
const dias2Ms = 24*60*60*1000
const horas2Ms = 60*60*1000
const minutos2Ms = 60*1000

setInterval(()=>{
    const tsActual = Date.now()
    const diferencia = tsFinal - tsActual

    let aniosRestantes = Math.floor(diferencia / anios2Ms)
    let tiempoRestante = diferencia % anios2Ms

    let meseRestantes = Math.floor(tiempoRestante / meses2Ms)
    tiempoRestante = tiempoRestante %  meses2Ms

    let diasRestantes = Math.floor(tiempoRestante / dias2Ms)
    tiempoRestante = tiempoRestante %  dias2Ms

    let horasRestantes = Math.floor(tiempoRestante / horas2Ms)
    horasRestantes<10 ? horasRestantes='0'+horasRestantes : null
    tiempoRestante = tiempoRestante % horas2Ms

    let minutosRestantes = Math.floor(tiempoRestante /minutos2Ms)
    minutosRestantes<10 ? minutosRestantes='0'+minutosRestantes : null
    tiempoRestante = tiempoRestante % minutos2Ms

    let segundosRestantes = Math.floor(tiempoRestante / 1000)
    segundosRestantes<10 ? segundosRestantes='0'+segundosRestantes : null

    contenedor.innerHTML = `${aniosRestantes} años : ${meseRestantes} meses : ${diasRestantes} días : ${horasRestantes} horas : ${minutosRestantes} minutos : ${segundosRestantes} segundos.`

},1000)

