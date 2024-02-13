const sliderAncho = document.querySelector('#ancho')
const sliderAlto = document.querySelector('#alto')
const sliderEscala = document.querySelector('#escala')
const sliderRotacion = document.querySelector('#rotacion')
const sliderOpacidad = document.querySelector('#opacidad')
const imagen = document.querySelector('img')
const lateral = document.querySelector('aside')
const paneles = document.querySelectorAll('.panel')

const botonCerrar = document.querySelector('#botonCerrar')
const botonMenu = document.querySelector('#botonMenu')


sliderAncho.addEventListener('input',(e)=>{
    imagen.style.width = `${e.target.value}%`
    imagen.style.height = `${sliderAlto.value}%`
})

sliderAlto.addEventListener('input',(e)=>{
    imagen.style.height = `${e.target.value}%`
    imagen.style.width = `${sliderAncho.value}%`
})

sliderEscala.addEventListener('input',(e)=>{
    imagen.style.height = `${e.target.value}%`
    imagen.style.width = `${e.target.value}%`
    sliderAncho.value = e.target.value
    sliderAlto.value=e.target.value
})

sliderRotacion.addEventListener('input',(e)=>{
    imagen.style.transform = `rotate(${e.target.value}deg)`
})
sliderOpacidad.addEventListener('input',(e)=>{
    console.log(e.target.value)
    imagen.style.opacity = e.target.value
})

botonCerrar.addEventListener('click',()=>{
    lateral.style.width = '80px'
    paneles.forEach(p=>{p.style.display='none'})
    botonCerrar.style.display='none'
    botonMenu.style.display='block'
})
botonMenu.addEventListener('click',()=>{
    lateral.style.width = '200px'
    paneles.forEach(p=>{p.style.display='block'})
    botonCerrar.style.display='block'
    botonMenu.style.display='none'
})