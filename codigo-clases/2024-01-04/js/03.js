function checkEdad(edad, cuadro){
    let semaforo
    if(cuadro==1){
        semaforo = document.querySelector('#semaforo1')
    }else if(cuadro==2){
        semaforo = document.querySelector('#semaforo2')
    }else if(cuadro==3){
        semaforo = document.querySelector('#semaforo3')
    }
    
    if(edad>=18){
        semaforo.style.backgroundColor='green'    
    }else{
        semaforo.style.backgroundColor='red'
    }

}
checkEdad(26, 1)
checkEdad(19, 2)
checkEdad(36, 3)
