let elementos = document.querySelectorAll('.elemento')
elementos.forEach(el=>{
    el.addEventListener('click', (e)=>{
        console.log(e.target)
    })
})

document.querySelector('#off').addEventListener('click',()=>{
    elementos.forEach(el=>{
        el.disabled = true;
    })
})
document.querySelector('#on').addEventListener('click',()=>{
    elementos.forEach(el=>{
        el.disabled = false;
    })
})