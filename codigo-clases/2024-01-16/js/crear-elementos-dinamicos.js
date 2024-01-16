//Guardamos el contenedor de todo el contenido para poder inyectarle elementos
const contenedor = document.querySelector('main')

function creaElemento(){
    //Creamos un div
    let hijo = document.createElement('div')
    //Le añadimos una clase, que está ya definida en la hoja de estilos
    hijo.classList.add('elemento')
    //Creamos un texto
    let texto = document.createTextNode('HIJO')
    //Al div creado aquí le añadimos el texto
    hijo.appendChild(texto)
    //Y al contenedor de todo le añadimos este div recién creado
    contenedor.appendChild(hijo)
}

creaElemento()
creaElemento()
creaElemento()
creaElemento()
creaElemento()