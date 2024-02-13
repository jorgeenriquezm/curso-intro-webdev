let posX
let posY
const tooltip = document.querySelector('.tooltip')
document.querySelector('body').addEventListener('mousemove',(e)=>{
    posX = e.screenX
    posY = e.screenY
})
document.querySelector('input').addEventListener('input', (e)=>{
    tooltip.style.left=`${posX}px`
    tooltip.style.top=`${posY-100}px`
    tooltip.style.display='block'
    tooltip.innerHTML=e.target.value
})
document.querySelector('input').addEventListener('change', (e)=>{
    tooltip.style.display='none'
})