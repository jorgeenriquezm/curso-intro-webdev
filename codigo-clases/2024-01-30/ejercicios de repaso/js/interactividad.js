document.querySelector('#el1').addEventListener('click', (e)=>{
    e.target.style.display='none'
})

document.querySelector('#el2').addEventListener('click', ()=>{
    document.querySelector('#el3').style.display='none'
})

document.querySelector('#el4').addEventListener('click', (e)=>{
    var elemento = e.target
    setTimeout(()=>{
        elemento.style.display='none'
    }, 2000)
})

document.querySelector('#el5').addEventListener('click', (e)=>{
    var elemento = e.target
    setTimeout(()=>{
        elemento.style.display='none'
    }, 2000)
    setTimeout(()=>{
        elemento.style.display='block'
    }, 5000)
})