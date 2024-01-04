/*
La función tiene que recibir dos argumentos, la edad del usuario y el cuadro que
tiene que modificar (1-3, no controlamos otros valores)
*/
function checkEdad(edad, cuadro){
    //Vamos a guardar en una variable el elemento html correspondiente al argumento
    //que recibamos. La creamos y le damos valor según lo recibido
    let semaforo
    if(cuadro==1){
        semaforo = document.querySelector('#semaforo1')
    }else if(cuadro==2){
        semaforo = document.querySelector('#semaforo2')
    }else if(cuadro==3){
        semaforo = document.querySelector('#semaforo3')
    }
    //Una vez determinado sobre que cuadro tenemos que trabajar, vamos a ver
    //que color de fondo le tenemos que dar según el primer parámetro que recibimos
    if(edad>=18){
        semaforo.style.backgroundColor='green'    
    }else{
        semaforo.style.backgroundColor='red'
    }

}
//Llamamos a nuestra función pasándole (edad, cuadro-a-modificar)
checkEdad(26, 1)
checkEdad(19, 2)
checkEdad(36, 3)
