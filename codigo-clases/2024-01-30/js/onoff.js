let encendida = false

document.querySelector('button').addEventListener('click',()=>{
    encendida = !encendida
    console.log(`encendida ahora vale ${encendida}`)
    if(encendida){
        //Acciones cuando se enciende
    }else{
        //Acciones cuando se apaga
    }
})