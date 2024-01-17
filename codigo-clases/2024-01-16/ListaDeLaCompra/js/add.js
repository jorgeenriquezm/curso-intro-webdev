//Creamos un arry donde guardaremos cada uno de los items que añadamos
let lista = []
//Primero comprobamos si no existe la lista, de ser así sacamos un alert
if(localStorage.getItem('lista')==null){
    console.log("La lista está vacía")
}else{
    //Sí existe la lista en localStorage, la parseamos y pasamos al array creado arriba
    lista = JSON.parse(localStorage.getItem('lista'))
}
//Guardamos en botón de tipo submit y le añadimos el listener que necesitamos
let boton = document.querySelector('input[type="submit"]')
boton.addEventListener('click', (e)=>{
    //Primero paramos el comportamiento por defecto y evitamos que haga el submit
    e.preventDefault()
    /*Cogemos de localStorage el último id creado, le sumamos uno y metemos
    en una variable para asignarle al nuevo ítem que vamos a crear.
    También lo guardamos ya en localStorage para el próximo uso
    */
    const ultimoId = parseInt(localStorage.getItem('lista-ultimo-id'))+1
    localStorage.setItem('lista-ultimo-id', ultimoId)
    //Creamos un objeto nuevo donde vamos a almacenar la info de cada ítem
    let item = {}
    //Las dos primeras propiedades cogen valor del formulario
    item.nombre = document.querySelector('#item_name').value
    item.url = document.querySelector('#item_url').value
    //La propiedad comprado posiblemente la usaremos más adelante, al crearlo le ponemos false
    item.comprado=false
    //Le damos el id que creamos arriba para que cada uno tenga una propiedad ÚNICA
    item.id=ultimoId
    //Lo añadimos a la lista de ítems
    lista.push(item)
    //Y escribimos la lista en el localStorage para que quede guardado este nuevo ítem
    localStorage.setItem('lista', JSON.stringify(lista))
    /*Una vez guardado, podríamos borrar los campos del formulario para evitar
    que un doble click nos guarde dos ítems. Al ser campos required, la segunda 
    vez no funcionaría, por lo que evitaríamos ese problema */
})