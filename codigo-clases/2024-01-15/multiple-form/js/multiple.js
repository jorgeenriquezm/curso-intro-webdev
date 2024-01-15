let primero = document.querySelector('#primero')
let segundo = document.querySelector('#segundo')
let tercero = document.querySelector('#tercero')

segundo.addEventListener('change',(e)=>{
    //Creamos un array para guardar las options elegidas del select
    let elegidas = []
    //Guardamos el limite de ese select puesto con data-attribute
    const limite = segundo.dataset.limite
    for(i=0;i<e.target.options.length;i++){
        if(e.target.options[i].selected){
            //Si está seleccionada, la añadimos al array creado
            elegidas.push(e.target.options[i])
        }
    }
    //Y si sus elementos son más del límite puesto...
    if(elegidas.length>limite){
        console.log('Has elegido más de las permitidas!')
        //Quitar selección a una, a todas, bla bla bla
    }else{
        console.log('Todo ok, podemos seguir')
        
    }
})

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    alert('Info guardada')
})