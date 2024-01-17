let listaDeElementos = []
const botonOk = document.querySelector('#ok')

botonOk.addEventListener('click', (e)=>{
    console.log("Creamos nuevo ítem...")
    e.preventDefault()
    let valor1 = document.querySelector('#campo1').value
    let valor2 = document.querySelector('#campo2').value

    const newItem = {
        propiedad1:valor1,
        propiedad2:valor2
    }

    listaDeElementos.push(newItem)
    console.log(listaDeElementos)
})