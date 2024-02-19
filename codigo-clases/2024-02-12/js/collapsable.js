const hijos = document.querySelectorAll('.hijo')
let abierto = false

document.querySelector('button').addEventListener('click',()=>{
    if(!abierto){
        document.querySelector('main').style.gridTemplateRows='repeat(5,1fr)'
    }else{
        document.querySelector('main').style.gridTemplateRows='0 0 0 0 auto'
    }
    abierto=!abierto
})